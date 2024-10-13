import { Request, Response } from "express";
import ICard from "../../interface/card.interface";
import CardService from "../../services/adminPanel/card.service";

export default class CardController {
  private readonly cardService: CardService

  constructor() {
    this.cardService = new CardService()
  }

  async createCard(req: Request, res: Response) {
    try {
      // const data: ICategory = {
      //   categoryName: req.body.categoryName,
      //   title: req.body.title,
      //   description: req.body.description,
      //   image: req.file?.filename || "unimage.png"
      // }
      // const category = await this.categoryService.create(data)
      // res.status(200).json(category)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async getAllCard(req: Request, res: Response) {
   try {
    const cards = await this.cardService.findAll()
    res.status(200).json(cards)
   } catch (error: unknown) {
    throw new Error(error as string)
   }
  }

  async getCard(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const card = await this.cardService.findById(id)
      res.status(200).json(card)
   } catch (error: unknown) {
      throw new Error(error as string)
   }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      // const id: string = req.params.id
      // const oldCategory = await this.categoryService.findById(id)
      // const data: ICategory = {
      //   categoryName: req.body.categoryName,
      //   title: req.body.title,
      //   description: req.body.description,
      //   image: req.file?.filename || oldCategory?.image || ""
      // }
      // const category = await this.categoryService.update(id, data)
      // res.status(200).json(category)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async deleteCard(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const card = await this.cardService.delete(id)
      res.status(200).json(card)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}