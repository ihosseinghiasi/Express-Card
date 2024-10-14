import { Router } from "express";
import CardController from "../../../../controllers/adminPanel/card.controller";

class CardRoute {
  private readonly cardController: CardController
  public readonly router: Router

  constructor() {
    this.cardController = new CardController()
    this.router = Router()
    this.initRoutes()
  }

  private initRoutes() {
    this.router.post('/createCard', this.cardController.createCard.bind(this.cardController))
    this.router.get('/getAllCards', this.cardController.getAllCards.bind(this.cardController))
    this.router.get('/getCard/:id', this.cardController.getCard.bind(this.cardController))
    this.router.put('/updateCard/:id', this.cardController.updateCard.bind(this.cardController))
    this.router.delete('/deleteCard/:id', this.cardController.deleteCard.bind(this.cardController))
  }
}