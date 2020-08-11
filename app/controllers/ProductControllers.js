const Product = require('../models/Product');

const index = (req, res) => {
    Product.find({}).then(products => {
        if (products.length) return res.status(200).send({ products })
        return res.status(204).send({ message: 'no content' })
    }).catch(error => res.status(500).send({ error }))
}

const create = (req, res) => {
    new Product(req.body).save().then(products => res.status(201).send({ products })).catch(error => res.status(500).send({ error }))
}

const show = (req, res) => {
    if (req.body.error) return res.status(500).send({ error })
    if (!req.body.products) return res.status(404).send({ message: "Not found" })
    let products = req.body.products;
    return res.status(200).send({ products })
}

const update = (req, res) => {
    if(req.body.error) return res.status(500).send({error})
    if (!req.body.products) return res.status(404).send({ message: 'Not Found' })
    let product = req.body.products[0]
    product = Object.assign(product, req.body)
    product.save().then(product => res.status(200).send({ message: 'update', product }))
        .catch(error => {
            res.status(500).send(error)
            console.log(error)
        })
}


const remove = (req, res) => {
    if (req.body.error) return res.status(500).send({ error })
    if (!req.body.products) return res.status(404).send({ message: 'Not Found' })
    req.body.products[0].remove().then(product => res.status(200).send({ message: 'remove', product }))
        .catch(error => res.status(500).send({ error }))
}

const find = (req, res, next) => {
    let query = {}
    query[req.params.key] = req.params.value;
    Product.find(query).then(products => {
        if (!products.length) return next()
        req.body.products = products
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