import mongoose from "mongoose";
import IProduct from "../interface/product.interface";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  cycle: { type: Number, required: true }, // cycle Of Time
  count: { type: Number, required: true },
  accessible: { type: String, required: true },
  fields: [],
  image: { type: String, required: true },
  categoryTitle: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Product = mongoose.model<IProduct>("Product", productSchema, "Product");
export default Product;
