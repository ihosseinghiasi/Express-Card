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

  async getAllCategories(req: Request, res: Response) {
   try {
    const products = await this.productService.findAll()
    res.status(200).json(products)
   } catch (error: unknown) {
    throw new Error(error as string)
   }
  }

  async getCategory(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const product = await this.productService.findById(id)
      res.status(200).json(product)
   } catch (error: unknown) {
      throw new Error(error as string)
   }
  }

  async updateCategory(req: Request, res: Response) {
    try {

    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const product = await this.productService.delete(id)
      res.status(200).json(product)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}