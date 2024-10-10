import { Router } from "express";
import UserController from "../../../../controllers/adminPanel/user.controller";

class UserRoute {
  private readonly userController: UserController
  public readonly router: Router

  constructor() {
    this.userController = new UserController()
    this.router = Router()
    this.initRoutes()
  }

  private initRoutes() {
    this.router.post("/createUser", this.userController.createUser.bind(this.userController))
    this.router.get("/getAllUsers", this.userController.findAllUsers.bind(this.userController))
    this.router.get("/getUser/:id", this.userController.findUser.bind(this.userController))
    this.router.put("/updateUser/:id", this.userController.updateUser.bind(this.userController))
    this.router.delete("/deleteUser/:id", this.userController.deleteUser.bind(this.userController))
  }
}

export default new UserRoute().router