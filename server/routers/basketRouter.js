const Router = require('express')
const router = new Router()




const authMiddleware = require('../middleware/authMiddleware')
const basketController = require('../controllers/basketController')


router.get('/', authMiddleware, basketController.getBasketUser)
router.post('/', authMiddleware, basketController.addBasket)

module.exports = router