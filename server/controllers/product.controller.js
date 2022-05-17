const {Products} = require('./../models/product.model')

//Get all
module.exports.allProduct = (req, res) =>{
    Products.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

//Get one
module.exports.oneProduct = (req, res) =>{
    Products.findOne({_id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

//Create
module.exports.createProduct = (req, res) =>{
    Products.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

//Update
module.exports.updateProduct = (req, res) =>{
    Products.findOneAndUpdate({_id: req.params.id}, 
        req.body,
        {new: true, runValidators: true})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

//Delete
module.exports.deleteProduct = (req, res) =>{
    Products.findOneAndDelete({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}