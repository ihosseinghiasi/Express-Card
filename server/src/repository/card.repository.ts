import Card from "../models/card"
import ICard from "../interface/card.interface"
import GenericRepository from "./generic.repository"

export default class CardRepository extends GenericRepository<ICard> {
  constructor() {
    super(Card)
  }
}