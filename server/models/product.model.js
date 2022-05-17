const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: [true, 'Title is required'],
    },
    Price:{
        type: Number,
        required: [true, 'Price is required']
    },
    Desc:{
        type: String,
        required: [true, 'Description is required']
    }
})

module.exports.Products = mongoose.model('Product', ProductsSchema )