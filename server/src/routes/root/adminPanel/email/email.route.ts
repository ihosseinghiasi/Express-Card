import { Router } from "express";
import EmailTemplateController from "../../../../controllers/adminPanel/emailTemplate.controller";

class EmailRoute {
  private readonly emailTemplateController: EmailTemplateController;
  public readonly router: Router;

  constructor() {
    this.emailTemplateController = new EmailTemplateController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post(
      "/createEmailTemplate",
      this.emailTemplateController.createEmailTemplate.bind(
        this.emailTemplateController
      )
    );

    this.router.get(
      "/getAllEmailTemplates",
      this.emailTemplateController.findAllEmailTemplates.bind(
        this.emailTemplateController
      )
    );
  }
}

export default new EmailRoute().router;
