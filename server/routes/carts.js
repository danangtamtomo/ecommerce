var express = require('express')
var router = express.Router()
const CartController = require('../controllers/CartController')

router.get('/', CartController.getCarts)
router.get('/', CartController.getCart)
router.post('/', CartController.createCart)
router.put('/', CartController.updateCart)
router.delete('/', CartController.deleteCart)

module.exports = router
