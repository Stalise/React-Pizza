const Router = require('express');
const router = new Router()
const userController = require('../controllers/user.controller');
const jwtCheck = require('../middleware/jwtCheck')

router.get('/user', userController.checkUser)
router.post('/user/reg', userController.createUser)
router.post('/user/autho', userController.authorizationUser)

module.exports = router