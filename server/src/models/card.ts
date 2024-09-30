import mongoose from "mongoose"

const cardSchema = new mongoose.Schema({
  cardCard: { type: String },
  cardProduct: { type: String },
  cardStatus: { type: String },
  cardFields: {},
});

export const cardModel = mongoose.model("Card", cardSchema, "Card");

export const getCard = () => { cardModel.find() }
export const getCardById = (id: String) => { cardModel.findById({ id }) }
export const deleteCardById = (id: string) => { cardModel.findByIdAndDelete({ _id: id }) }
export const updateCardById = (id: string, values: Record<string, any>) => { cardModel.findByIdAndUpdate(id, values) }
export const createCard = (values: Record<string, any>) =>
    new cardModel(values).save().then((Card) => Card.toObject())