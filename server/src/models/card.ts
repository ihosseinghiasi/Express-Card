import mongoose from "mongoose";
import ICard from "../interface/card.interface";

const cardSchema = new mongoose.Schema({
  cardCategory: { type: String, required: true },
  cardProduct: { type: String, required: true },
  cardStatus: { type: String, required: true },
  cardFields: {},
});

const Card = mongoose.model<ICard>("Card", cardSchema, "Card");
export default Card;
