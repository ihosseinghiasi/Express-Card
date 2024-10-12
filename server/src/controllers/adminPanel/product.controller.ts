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