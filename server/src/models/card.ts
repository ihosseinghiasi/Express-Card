import mongoose from "mongoose"
import { categoryModel } from "./category";

const cardSchema = new mongoose.Schema({
  cardCategory: { type: String },
  cardProduct: { type: String },
  cardStatus: { type: String },
  cardFields: {},
});

export const cardModel = mongoose.model("Card", cardSchema, "Card");

export const getCategories = () => { categoryModel.find() }
export const getCategoryById = (id: String) => { categoryModel.findById({ id }) }
export const deleteCategoryById = (id: string) => { categoryModel.findByIdAndDelete({ _id: id }) }
export const updateCategoryById = (id: string, values: Record<string, any>) => { categoryModel.findByIdAndUpdate(id, values) }
export const createCategory = (values: Record<string, any>) =>
    new categoryModel(values).save().then((Category) => Category.toObject())