var mongoose = require('mongoose')

var customerSchema = mongoose.Schema({
  name: String,
  memberId: String,
  address: String,
  zip: String,
  phone: String
}, {
  timestamps: true
})

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
