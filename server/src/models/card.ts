import mongoose from "mongoose"
import ICard from "../interface/card.interface";

const cardSchema = new mongoose.Schema({
  cardCategory: { type: String },
  cardProduct: { type: String },
  cardStatus: { type: String },
  cardFields: {},
});

const Card = mongoose.model<ICard>("Card", cardSchema, "Card");
export default Card