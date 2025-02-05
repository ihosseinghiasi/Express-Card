import { Router } from "express";
import UserController from "../../../../controllers/userPanel/user.controller";

class UserProfileRoute {
  private readonly userController: UserController;
  public readonly router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(
      "/getUser/:id",
      this.userController.findUser.bind(this.userController)
    );
    this.router.put(
      "/updateUser/:id",
      this.userController.updateUser.bind(this.userController)
    );
  }
}

export default new UserProfileRoute().router;
