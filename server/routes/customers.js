var express = require('express')
var router = express.Router()
const CustomerController = require('../controllers/CustomerController')

router.get('/', CustomerController.getCustomers)
router.get('/', CustomerController.getCustomer)
router.post('/', CustomerController.createCustomer)
router.put('/', CustomerController.updateCustomer)
router.delete('/', CustomerController.deleteCustomer)

module.exports = router
