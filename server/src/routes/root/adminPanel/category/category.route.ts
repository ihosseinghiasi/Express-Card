import { Router } from "express";
import CategoryController from "../../../../controllers/adminPanel/category.controller";
import upload from "../../../../config/multer"

class CategoryRoute {
  private readonly categoryController: CategoryController
  public readonly router: Router

  constructor() {
    this.categoryController = new CategoryController()
    this.router = Router()
    this.initRoutes()
  }

  private initRoutes() {
    this.router.post('/createCategory', upload.single('file'), this.categoryController.createCategory.bind(this.categoryController))
    this.router.get('/getAllCategories', this.categoryController.getAllCategories.bind(this.categoryController))
    this.router.get('/getCategory/:id', this.categoryController.getCategory.bind(this.categoryController))
    this.router.put('/updateCategory/:id', upload.single('file'), this.categoryController.updateCategory.bind(this.categoryController))
    this.router.delete('/deleteCategory/:id', this.categoryController.deleteCategory.bind(this.categoryController))

  }
}

export default new CategoryRoute().router