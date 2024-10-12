import mongoose from "mongoose"
import IProduct from "../interface/product.interface"

const productSchema = new mongoose.Schema({
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
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
})

const Product = mongoose.model<IProduct>('Product', productSchema, 'Product')
export default Product
