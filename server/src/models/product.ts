import mongoose from "mongoose"

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

export const productModel = mongoose.model('Product', productSchema, 'Product')

export const getProducts = () => { productModel.find() }
export const getProductById = (id: String) => { productModel.findById({ id }) }
export const deleteProductById = (id: string) => { productModel.findByIdAndDelete({ _id: id }) }
export const updateProductById = (id: string, values: Record<string, any>) => { productModel.findByIdAndUpdate(id, values) }
export const createProduct = (values: Record<string, any>) =>
    new productModel(values).save().then((product) => product.toObject())