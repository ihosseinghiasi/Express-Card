import { Router } from "express";
import ProductController from "../../../../controllers/adminPanel/product.controller";
import upload from "../../../../config/multer";

class ProductRoute {
  private readonly productController: ProductController
  public readonly router: Router

  constructor() {
    this.productController = new ProductController()
    this.router = Router()
    this.initRoutes()
  }

  private initRoutes() {
    this.router.post('/createProduct', upload.single('file'), this.productController.createProduct.bind(this.productController))
    this.router.get('/getAllProducts', this.productController.getAllProducts.bind(this.productController))
    this.router.get('/getProduct/:id', this.productController.getProduct.bind(this.productController))
    this.router.put('/updateProduct/:id', upload.single('file'), this.productController.updateProduct.bind(this.productController))
    this.router.delete('/deleteProduct/:id', this.productController.deleteProduct.bind(this.productController))

  }
}

export default new ProductRoute().router