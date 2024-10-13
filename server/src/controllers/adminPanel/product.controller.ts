import { Request, Response } from "express";
import ProductService from "../../services/adminPanel/product.service";
import IProduct from "../../interface/product.interface";

export default class ProductController {
  private readonly productService: ProductService

  constructor() {
    this.productService = new ProductService()
  }

  async createProduct(req: Request, res: Response) {
    try {
      const data: IProduct = {
        productName: req.body.productName,
        title: req.body.title,
        categoryTitle: req.body.categoryTitle,
        cycle: req.body.cycle,
        price: req.body.price,
        description: req.body.description,
        accessible: req.body.accessible,
        image: req.file?.filename || "unimage.png",
        fields: req.body.fields,
        count: req.body.count
      }
      const product = await this.productService.create(data)
      res.status(200).json(product)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async getAllProducts(req: Request, res: Response) {
   try {
    const products = await this.productService.findAll()
    res.status(200).json(products)
   } catch (error: unknown) {
    throw new Error(error as string)
   }
  }

  async getProduct(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const product = await this.productService.findById(id)
      res.status(200).json(product)
   } catch (error: unknown) {
      throw new Error(error as string)
   }
  }

  async updateProduct(req: Request, res: Response) {
    try {

    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const product = await this.productService.delete(id)
      res.status(200).json(product)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}