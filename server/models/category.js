const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryName: {type: String},
    title: {type: String},
    description: {type: String},
    image: {type: String}
})

module.exports = mongoose.model('Category',categorySchema,'Category')