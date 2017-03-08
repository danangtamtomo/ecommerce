var mongoose = require('mongoose')

var cartSchema = mongoose.Schema({
  memberId: String,
  total: Number,
  transactionDate: Date,
  itemlist: [{
    itemCode: String,
    qty: Number,
    price: Number
  }]
}, {
  timestamps: true
})

// rentSchema.methods.getRentPriceTotal = function () {
//   return rent_price * rent_duration
// }

var Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart
