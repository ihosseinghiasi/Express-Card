import { Request, Response } from "express";
import ICategory from "../../interface/category.interface";
import CategoryService from "../../services/adminPanel/category.service";

export default class CategoryController {
  private readonly categoryService: CategoryService

  constructor() {
    this.categoryService = new CategoryService()
  }

  async create(req: Request, res: Response) {
    try {
      const data: ICategory = req.body.category
      const categoryImage = req.file?.fieldname
      data.image = categoryImage || ""
      const category = await this.categoryService.create(data)
      res.status(200).json(category)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}