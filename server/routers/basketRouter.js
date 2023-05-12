const Router = require('express')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware');
const basketController = require('../controllers/basketController')

const authMiddleware = require('../middleware/authMiddleware')

// ------- CRUD корзины ------- //
router.get('/', authMiddleware, checkRole('ADMIN'), basketController.getBasketUser)
router.post('/',  authMiddleware , checkRole('ADMIN'), basketController.addToBasket)
router.delete('/', authMiddleware, basketController.deleteItemBasket)


module.exports = router