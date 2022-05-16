const Router = require('express');

const userController = require('../controllers/user.controller');
const jwtCheck = require('../middleware/jwtCheck')

const router = new Router()

router.get('/user', jwtCheck, userController.checkUser)
router.get('/user/logout', userController.logoutUser)
router.post('/user/reg', userController.createUser)
router.post('/user/auth', userController.authorizationUser)

module.exports = router