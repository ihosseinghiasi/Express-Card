import { Router } from "express";
import EmailController from "../../../../controllers/userPanel/email.controller";

class EmailRoute {
  private readonly emailControllser: EmailController;
  public readonly router: Router;

  constructor() {
    this.emailControllser = new EmailController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(
      "/getAllEmails",
      this.emailControllser.findAllEmails.bind(this.emailControllser)
    );
    this.router.get(
      "/getEmail/:id",
      this.emailControllser.findEmail.bind(this.emailControllser)
    );
  }
}

export default new EmailRoute().router;
