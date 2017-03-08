var mongoose = require('mongoose')

var itemSchema = mongoose.Schema({
  itemCode: String,
  name: String,
  description: String,
  price: Number,
  stock: Number
}, {
  timestamps: true
})

var Item = mongoose.model('Item', itemSchema)

module.exports = Item
