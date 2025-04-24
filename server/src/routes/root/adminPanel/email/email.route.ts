import { Router } from "express";
import EmailController from "../../../../controllers/adminPanel/email.controller";

class EmailRoute {
  private readonly emailControllser: EmailController;
  public readonly router: Router;

  constructor() {
    this.emailControllser = new EmailController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post(
      "/createEmail",
      this.emailControllser.create.bind(this.emailControllser)
    );
  }
}

export default new EmailRoute().router;
