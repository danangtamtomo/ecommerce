const Cart = require('../models/cart')

var CartController = {}

CartController.getCarts = function (req, res, next) {
  Cart.find({})
    .then(function (carts) {
      res.send(carts)
    })
}

CartController.getCart = function (req, res, next) {
  Cart.find({
    _id: req.body.id
  })
    .then(function (cart) {
      res.send(cart)
    })
}

CartController.createCart = function (req, res, next) {
  var cart = new Cart(req.body)
  cart.save()
    .then(function (cart) {
      res.send({
        status: 'Ok',
        message: 'New cart has been created',
        cart: cart
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

CartController.updateCart = function (req, res, next) {
  Cart.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, cart) {
      res.send({
        status: 'Ok',
        message: `Cart has been updated`,
        updated_item: item
      })
    })
}

CartController.deleteCart = function (req, res, next) {
  Cart.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The cart has been deleted`
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

module.exports = CartController
