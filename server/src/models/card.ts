import mongoose from "mongoose"
import ICard from "../interface/card.interface";

const cardSchema = new mongoose.Schema({
  title: { type: String },
  product: { type: String },
  status: { type: String },
  fields: {},
});

const Card = mongoose.model<ICard>("Card", cardSchema, "Card");
export default Card