import { Request, Response } from "express";
import ICard from "../../interface/card.interface";
import IProduct from "../../interface/product.interface";
import CardService from "../../services/adminPanel/card.service";
import ProductService from "../../services/adminPanel/product.service";

export default class CardController {
  private readonly cardService: CardService;
  private readonly productService: ProductService;

  constructor() {
    this.cardService = new CardService();
    this.productService = new ProductService();
  }

  async createCard(req: Request, res: Response) {
    try {
      const fieldValues = req.body.data.fieldValues;
      const fieldNames = req.body.data.fieldNames;
      const fields = this.setFields(fieldNames, fieldValues);

      const data: ICard = {
        cardCategory: req.body.data.card.cardCategory,
        cardProduct: req.body.data.card.cardProduct,
        cardStatus: req.body.data.card.cardStatus,
        cardFields: fields,
      };
      const card = await this.cardService.create(data);
      this.IncreaseProductCount(data.cardProduct);
      res.status(200).json(card);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async setFields(fieldValues: string, fieldNames: string[]) {
    let fields = {};
    if (fieldValues !== "") {
      fields = Object.fromEntries(
        fieldNames.map((fieldName: string, index: number) => [
          `field${[index]}`,
          { fieldName: fieldName, fieldValue: fieldValues[index] },
        ])
      );
    }
    return fields;
  }

  async IncreaseProductCount(productTitle: string) {
    try {
      const product = await this.productService.findByTitle(productTitle);
      let productID: string = "";
      if (product) {
        Object.values(product).map((p) => {
          productID = p._id;
        });
        const data: IProduct = {
          productName: product.productName,
          title: product.title,
          categoryTitle: product.categoryTitle,
          cycle: product.cycle,
          count: ++product.count,
          price: product.price,
          description: product.description,
          accessible: product.accessible,
          image: product.image,
          fields: product.fields,
        };
        await this.productService.update(productID, data);
      }
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getAllCards(req: Request, res: Response) {
    try {
      const cards = await this.cardService.findAll();
      res.status(200).json(cards);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getCard(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const card = await this.cardService.findById(id);
      res.status(200).json(card);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async updateCard(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const fieldValues = req.body.data.fieldValues;
      const fieldNames = req.body.data.fieldNames;
      let fields = {};
      if (fieldValues !== "") {
        fields = Object.fromEntries(
          fieldNames.map((fieldName: string, index: number) => [
            `field${[index]}`,
            { fieldName: fieldName, fieldValue: fieldValues[index] },
          ])
        );
      }
      const data: ICard = {
        cardCategory: req.body.data.card.cardCategory,
        cardProduct: req.body.data.card.cardProduct,
        cardStatus: req.body.data.card.cardStatus,
        cardFields: fields,
      };
      const card = await this.cardService.update(id, data);
      res.status(200).json(card);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteCard(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const card = await this.cardService.delete(id);
      res.status(200).json(card);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async cardReport(req: Request, res: Response) {
    try {
      const cards = await this.cardService.findAll();
      const productTitle = "";
      let filterdCards = cards?.filter((card) => {
        return card.cardProduct === productTitle;
      });
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
