const mongoose = require('mongoose')


const cardSchema = new mongoose.Schema ({
    cardCategory: { type: String },
    cardProduct: { type: String },
    cardStatus: { type: String },
    cardFields: {}
})

module.exports = mongoose.model('Card', cardSchema ,'Card')