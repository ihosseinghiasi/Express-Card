import ICard from "../../interface/card.interface";
import CardRepository from "../../repository/card.repository";

export default class CardService {
  private readonly cardReposirory: CardRepository

  constructor() {
    this.cardReposirory = new CardRepository()
  }

  async create(data: ICard): Promise<ICard> {
    return this.cardReposirory.create(data)
  }

   async findAll(): Promise<ICard[] | null> {
    return this.cardReposirory.findAll()
  }

  async findById(id: string): Promise<ICard | null> {
    return this.cardReposirory.findById(id)
  }

  async update(id: string, data: ICard): Promise<ICard | null> {
    return this.cardReposirory.update(id, data)
  }

  async delete(id: string): Promise<ICard | null> {
    return this.cardReposirory.delete(id)
  }
}