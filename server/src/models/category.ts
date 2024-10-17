import mongoose from "mongoose";
import ICategory from "../interface/category.interface";
const categorySchema = new mongoose.Schema({
  categoryName: { type: String },
  title: { type: String },
  description: { type: String },
  image: { type: String },
});

const Category = mongoose.model<ICategory>(
  "Category",
  categorySchema,
  "Category"
);
export default Category;
