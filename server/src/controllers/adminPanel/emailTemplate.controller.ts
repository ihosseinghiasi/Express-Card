import { Request, Response } from "express";
import EmailTemplateService from "../../services/adminPanel/EmailTemplate.service";
import IEmail from "../../interface/emailTemplate.interface";

export default class EmailTemplate {
  private readonly emailTemplateService: EmailTemplateService;

  constructor() {
    this.emailTemplateService = new EmailTemplateService();
  }

  async createEmailTemplate(req: Request, res: Response) {
    try {
      const data: IEmail = req.body.email;
      const email = await this.emailTemplateService.create(data);
      res.status(200).json(email);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAllEmailTemplates(req: Request, res: Response) {
    try {
      const emails = this.emailTemplateService.findAll();
      res.status(200).json(emails);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findEmailTemplate(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const email = this.emailTemplateService.findOne(id);
      res.status(200).json(email);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async updateEmailTemplate(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const data: IEmail = req.body.email;
      const emailUpdated = this.emailTemplateService.update(id, data);
      res.status(200).json(emailUpdated);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteEmailTemplate(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const email = this.emailTemplateService.delete(id);
      res.status(200).json(email);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
