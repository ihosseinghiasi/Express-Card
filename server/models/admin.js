const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    department: {type: String},
    isAdmin: {type: Boolean},
    isProduct: {type: Boolean},
    isCard: {type: Boolean},
    isEmail: {type: Boolean},
    isReport: {type: Boolean},
    isTicket: {type: Boolean},
    isCategory: {type: Boolean},
    isUser: {type: Boolean},
    isPayment: {type: Boolean},
})

module.exports = mongoose.model('Admin',adminSchema,'Admin')