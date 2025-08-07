import mongoose from "mongoose";
import ICategory from "../interface/category.interface";

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Category = mongoose.model<ICategory>(
  "Category",
  categorySchema,
  "Category"
);
export default Category;
