const Router = require('express')
const router = new Router()
const authMiddleWare = require("../middleware/authMiddleware")
const userController = require('../controllers/userController')



router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleWare ,userController.check)

module.exports = router