import { Router } from "express";
import CategoryController from "../../../../controllers/adminPanel/category.controller";
const upload = require("../../../../config/upload")
class CategoryRoute {
  private readonly categoryController: CategoryController
  public readonly router: Router

  constructor() {
    this.categoryController = new CategoryController()
    this.router = Router()
    this.initRoutes()
  }

  private initRoutes() {
    this.router.post('/createCategory', upload.single('file'))
  }
}