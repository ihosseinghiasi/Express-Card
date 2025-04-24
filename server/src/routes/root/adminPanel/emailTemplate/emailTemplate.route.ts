import { Router } from "express";
import EmailTemplateController from "../../../../controllers/adminPanel/emailTemplate.controller";

class EmailTemplateRoute {
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

    this.router.get(
      "/getEmailTemplate/:id",
      this.emailTemplateController.findEmailTemplate.bind(
        this.emailTemplateController
      )
    );

    this.router.put(
      "/updateEmailTemplate/:id",
      this.emailTemplateController.updateEmailTemplate.bind(
        this.emailTemplateController
      )
    );

    this.router.delete(
      "/deleteEmailTemplate/:id",
      this.emailTemplateController.deleteEmailTemplate.bind(
        this.emailTemplateController
      )
    );
  }
}

export default new EmailTemplateRoute().router;
