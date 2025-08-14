import { Request, Response } from "express";
import ICategory from "../../interface/category.interface";
import CategoryService from "../../services/adminPanel/category.service";
import response from "../../config/response";

export default class CategoryController {
  private readonly categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  async createCategory(req: Request, res: Response) {
    try {
      const data: ICategory = {
        categoryName: req.body.categoryName,
        title: req.body.title,
        description: req.body.description,
        image: req.file?.filename || "unimage.png",
      };
      const category = await this.categoryService.create(data);
      if (!category) {
        return response(res, 400, "Card Not Successfuly Created.");
      }
      return response(res, 201, "Card Successfuly Created.", category);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await this.categoryService.findAll();
      if (!categories) {
        return response(res, 400, "Categories Not Successfuly Finded.");
      }
      return response(res, 200, "Categories Successfuly Finded.", categories);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getCategory(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const category = await this.categoryService.findById(id);
      if (!category) {
        return response(res, 404, "Category Not Successfuly Finded.");
      }
      return response(res, 200, "Category Successfuly Finded.", category);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const oldCategory = await this.categoryService.findById(id);
      if (!oldCategory) {
        return response(res, 404, "Category Not Successfuly Finded.");
      }
      const data: ICategory = {
        categoryName: req.body.categoryName,
        title: req.body.title,
        description: req.body.description,
        image: req.file?.filename || oldCategory?.image || "",
      };
      const category = await this.categoryService.update(id, data);
      if (!category) {
        return response(res, 400, "Category Not Successfuly Updated.");
      }
      return response(res, 200, "Category Successfuly Updated.", category);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const category = await this.categoryService.delete(id);
      if (!category) {
        return response(res, 400, "Category Not Successfuly Deleted.");
      }
      return response(res, 200, "Category Successfuly Deleted.");
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
