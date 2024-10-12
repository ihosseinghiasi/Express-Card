import express, { Application } from "express";
import cors from "cors";
import ErrorHandler from "./helpers/error-handler";
import Database from "./config/db";
import dotenv from "dotenv"
import userRoute from "./routes/root/adminPanel/user/user.route";
import adminRoute from "./routes/root/adminPanel/admin/admin.route"
import categoryRoute from "./routes/root/adminPanel/category/category.route"
import productRoute from "./routes/root/adminPanel/product/product"
import { urlencoded } from "body-parser";
export default class App {
  private readonly app: Application
  private readonly port: number

  constructor() {
    this.app = express()
    this.port = parseInt(process.env.PORT || "4000")
    this.init()
  }

  private init() {
    this.initConfig()
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
  }

  private initConfig() {
    new Database()
  }
  
  private initMiddlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(urlencoded({ extended: true }))
    dotenv.config()
  }

  private initRoutes() {
    this.app.use("/users", userRoute)
    this.app.use("/admins", adminRoute)
    this.app.use('/categories', categoryRoute)
    this.app.use("/products", productRoute)
  }

  initErrorHandling() {
    this.app.use(ErrorHandler.notFound)
    this.app.use(ErrorHandler.serverError)
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server Is Runnin On http://localhost:${this.port}`)
    })
  }
}

const app = new App()
app.listen()