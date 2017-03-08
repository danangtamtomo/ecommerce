var express = require('express')
var router = express.Router()
const ItemController = require('../controllers/ItemController')

router.get('/', ItemController.getItems)
router.get('/', ItemController.getItem)
router.post('/', ItemController.createItem)
router.put('/', ItemController.updateItem)
router.delete('/', ItemController.deleteItem)

module.exports = router
