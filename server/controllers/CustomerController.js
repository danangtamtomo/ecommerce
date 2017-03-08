const Customer = require('../models/Customer')

var CustomerController = {}

CustomerController.getCustomers = function (req, res, next) {
  Customer.find({})
    .then(function (customers) {
      res.send(customers)
    })
}

CustomerController.getCustomer = function (req, res, next) {
  Customer.find({
    _id: req.body.id
  })
    .then(function (customer) {
      res.send(customer)
    })
}

CustomerController.createCustomer = function (req, res, next) {
  var customer = new Customer(req.body)
  customer.save()
    .then(function (customer) {
      res.send({
        status: 'Ok',
        message: 'New customer has been created',
        customer: customer
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

CustomerController.updateCustomer = function (req, res, next) {
  Customer.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, cart) {
      res.send({
        status: 'Ok',
        message: `Customer has been updated`,
        updated_item: item
      })
    })
}

CustomerController.deleteCustomer = function (req, res, next) {
  Customer.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The customer has been deleted`
      })
    })
    .catch(function (err) {
      if (err) {
        res.send({
          status: 'Error',
          message: err
        })
      }
    })
}
module.exports = CustomerController
