const User = require('../models/User');

const index = (req, res) => {
    User.find({}).then(users => {
        if (users.length) return res.status(200).send({ users })
        return res.status(204).send({ message: 'no content' })
    }).catch(error => res.status(500).send({ error }))
}

const create = (req, res) => {
    new User(req.body).save().then(user => res.status(201).send({ user })).catch(error => res.status(500).send({ error }))
}

const show = (req, res) => {
    if (req.body.error) return res.status(500).send({ error })
    if (!req.body.users) return res.status(404).send({ message: "Not found" })
    let user = req.body.users;
    return res.status(200).send({ user})
}

const update = (req, res) => {
    if(req.body.error) return res.status(500).send({error})
    if (!req.body.users) return res.status(404).send({ message: 'Not Found' })
    let user = req.body.users[0]
    user = Object.assign(user, req.body)
    user.save().then(usersCb => res.status(200).send({ message: 'update', usersCb }))
        .catch(error => {
            res.status(500).send(error)
            console.log(error)
        })
}


const remove = (req, res) => {
    if (req.body.error) return res.status(500).send({ error })
    if (!req.body.users) return res.status(404).send({ message: 'Not Found' })
    req.body.users[0].remove().then(usersCb => res.status(200).send({ message: 'remove', usersCb }))
        .catch(error => res.status(500).send({ error }))
}

const find = (req, res, next) => {
    let query = {}
    query[req.params.key] = req.params.value;
    User.find(query).then(users => {
        if (!users.length) return next()
        req.body.users = users
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