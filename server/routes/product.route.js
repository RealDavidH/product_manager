const productsController = require('./../controllers/product.controller')


module.exports = (app) =>{
    app.get('/api/all/products', productsController.allProduct)
    app.get('/api/product/:id', productsController.oneProduct)
    app.post('/api/create/product', productsController.createProduct)
    app.put('/api/update/product/:id', productsController.updateProduct)
    app.delete('/api/delete/product/:id', productsController.deleteProduct)
}