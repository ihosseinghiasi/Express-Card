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
        image: req.file?.filename || ""
      }
      const category = await this.categoryService.create(data)
      res.status(200).json(category)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}