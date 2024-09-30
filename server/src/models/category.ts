import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    categoryName: {type: String},
    title: {type: String},
    description: {type: String},
    image: {type: String}
})

export const categoryModel = mongoose.model('Category',categorySchema,'Category')