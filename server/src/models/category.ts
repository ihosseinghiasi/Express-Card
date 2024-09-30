import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    categoryName: {type: String},
    title: {type: String},
    description: {type: String},
    image: {type: String}
})

export const categoryModel = mongoose.model('Category', categorySchema, 'Category')

export const getCategories = () => { categoryModel.find() }
export const getCategoryById = (id: String) => { categoryModel.findById({ id }) }
export const deleteCategoryById = (id: string) => { categoryModel.findByIdAndDelete({ _id: id }) }
export const updateCategoryById = (id: string, values: Record<string, any>) => { categoryModel.findByIdAndUpdate(id, values) }
export const createCategory = (values: Record<string, any>) =>
    new categoryModel(values).save().then((Category) => Category.toObject())