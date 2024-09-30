import mongoose from "mongoose"

const cardSchema = new mongoose.Schema({
  cardCategory: { type: String },
  cardProduct: { type: String },
  cardStatus: { type: String },
  cardFields: {},
});

export const cardModel = mongoose.model("Card", cardSchema, "Card");
