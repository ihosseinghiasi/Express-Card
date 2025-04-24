import { Request, Response } from "express";
import IEmail from "../../interface/email.interface";
import EmailService from "../../services/adminPanel/email.service";

export default class EmailController {
  private readonly emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  async create(req: Request, res: Response) {
    try {
      const paymentData = req.body.email;
      console.log(paymentData);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAllAdmins(req: Request, res: Response) {
    try {
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAdmin(req: Request, res: Response) {
    try {
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteAdmin(req: Request, res: Response) {
    try {
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
