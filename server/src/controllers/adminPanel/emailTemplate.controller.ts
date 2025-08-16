import { Request, Response } from "express";
import EmailTemplateService from "../../services/adminPanel/emailTemplate.service";
import IEmailTemplate from "../../interface/emailTemplate.interface";
import response from "../../config/response";

export default class EmailTemplate {
  private readonly emailTemplateService: EmailTemplateService;

  constructor() {
    this.emailTemplateService = new EmailTemplateService();
  }

  async createEmailTemplate(req: Request, res: Response) {
    try {
      const data: IEmailTemplate = req.body.email;
      const email = await this.emailTemplateService.create(data);
      if (!email) {
        return response(res, 400, "Email Template Not Successfuly Created.");
      }
      return response(res, 201, "Email Template Successfuly Created.", email);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAllEmailTemplates(req: Request, res: Response) {
    try {
      const emails = await this.emailTemplateService.findAll();
      if (!emails) {
        return response(res, 400, "Email Template Not Successfuly Finded.");
      }
      return response(res, 200, "Email Template Successfuly Created.", emails);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findEmailTemplate(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const email = await this.emailTemplateService.findOne(id);
      if (!email) {
        return response(res, 404, "Email Template Not Successfuly finded.");
      }
      return response(res, 200, "Email Template Successfuly Finded.", email);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async updateEmailTemplate(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const data: IEmailTemplate = req.body.email;
      const email = await this.emailTemplateService.update(id, data);
      if (!email) {
        return response(res, 400, "Email Template Not Successfuly Updated.");
      }
      return response(res, 200, "Email Template Successfuly Updated.", email);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteEmailTemplate(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const email = await this.emailTemplateService.delete(id);
      if (!email) {
        return response(res, 400, "Email Template Not Successfuly Deleted.");
      }
      return response(res, 200, "Email Template Successfuly Deleted.", email);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
