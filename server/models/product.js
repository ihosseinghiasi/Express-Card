const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productSchema = new Schema({
    productName: {type: String},
    title: {type: String},
    description: {type: String},
    price: {type: Number},
    cycle: {type: Number}, // cycle Of Time
    accessible: {type: String},
    fields: [],
    image: {type: String},
    count: {type: Number, default: 0}, // Number Of Projects
    categoryTitle: {type: String},
    category: {type: Schema.Types.ObjectId, ref: 'Category'}
})

module.exports = mongoose.model('Product', productSchema, 'Product')