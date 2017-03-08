const Item = require('../models/Item')

var ItemController = {}

ItemController.getItems = function (req, res, next) {
  Item.find({})
    .then(function (items) {
      res.send(items)
    })
}

ItemController.getItem = function (req, res, next) {
  Item.find({
    _id: req.body.id
  })
    .then(function (item) {
      res.send(item)
    })
}

ItemController.createItem = function (req, res, next) {
  var item = new Item(req.body)
  item.save()
    .then(function (item) {
      res.send({
        status: 'Ok',
        message: 'New item has been created',
        item: item
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

ItemController.updateItem = function (req, res, next) {
  Item.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, item) {
      res.send({
        status: 'Ok',
        message: `${req.body.name} has been updated`,
        updated_item: item
      })
    })
}

ItemController.deleteItem = function (req, res, next) {
  Item.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The item has been deleted`
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

module.exports = ItemController
