const Router = require('express');
const router = new Router()
const productController = require('../controllers/products.controller');
// const jwtCheck = require('../middleware/jwtCheck')

router.get('/products', productController.getProducts)

module.exports = router