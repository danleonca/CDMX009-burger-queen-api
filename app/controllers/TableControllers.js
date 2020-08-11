const Table = require('../models/Table');

const index = (req, res) => {
    Table.find({}).then(tables => {
        if (tables.length) return res.status(200).send({ tables })
        return res.status(204).send({ message: 'no content' })
    }).catch(error => res.status(500).send({ error }))
}

const create = (req, res) => {
    new Table(req.body).save().then(table => res.status(201).send({ table })).catch(error => res.status(500).send({ error }))
}

const show = (req, res) => {
    if (req.body.error) return res.status(500).send({ error })
    if (!req.body.tables) return res.status(404).send({ message: "Not found" })
    let tables = req.body.tables;
    return res.status(200).send({ tables })
}

const update = (req, res) => {
    if(req.body.error) return res.status(500).send({error})
    if (!req.body.tables) return res.status(404).send({ message: 'Not Found' })
    let table = req.body.tables[0]
    table = Object.assign(table, req.body)
    table.save().then(table => res.status(200).send({ message: 'update', table }))
        .catch(error => {
            res.status(500).send(error)
            console.log(error)
        })
}


const remove = (req, res) => {
    if (req.body.error) return res.status(500).send({ error })
    if (!req.body.tables) return res.status(404).send({ message: 'Not Found' })
    req.body.tables[0].remove().then(table => res.status(200).send({ message: 'remove', table }))
        .catch(error => res.status(500).send({ error }))
}

const find = (req, res, next) => {
    let query = {}
    query[req.params.key] = req.params.value;
    Table.find(query).then(tables => {
        if (!tables.length) return next()
        req.body.tables = tables
        return next()
    }).catch(error => {
        req.body.error = error
        next()
    })
}





module.exports = {
    index,
    create,
    show,
    update,
    remove,
    find
}