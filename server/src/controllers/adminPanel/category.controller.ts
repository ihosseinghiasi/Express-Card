import { Request, Response } from "express";
import ICategory from "../../interface/category.interface";
import CategoryService from "../../services/adminPanel/category.service";

export default class CategoryController {
  private readonly categoryService: CategoryService

  constructor() {
    this.categoryService = new CategoryService()
  }

  async createCategory(req: Request, res: Response) {
    try {
      const data: ICategory = {
        categoryName: req.body.categoryName,
        title: req.body.title,
        description: req.body.description,
        image: req.file?.filename || "unimage.png"
      }
      const category = await this.categoryService.create(data)
      res.status(200).json(category)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async getAllCategories(req: Request, res: Response) {
   try {
    const categories = await this.categoryService.findAll()
    res.status(200).json(categories)
   } catch (error: unknown) {
    throw new Error(error as string)
   }
  }

  async getCategory(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const category = await this.categoryService.findById(id)
      res.status(200).json(category)
   } catch (error: unknown) {
      throw new Error(error as string)
   }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const oldCategory = await this.categoryService.findById(id)
      const data: ICategory = {
        categoryName: req.body.categoryName,
        title: req.body.title,
        description: req.body.description,
        image: req.file?.filename || oldCategory?.image || ""
      }
      const category = await this.categoryService.update(id, data)
      res.status(200).json(category)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const category = await this.categoryService.delete(id)
      res.status(200).json(category)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}