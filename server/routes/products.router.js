const Router = require('express');
const router = new Router()
const productController = require('../controllers/products.controller');

router.get('/products', productController.getProducts)

module.exports = router