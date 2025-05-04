import { Request, Response } from "express";
import EmailService from "../../services/adminPanel/email.service";
import IEmail from "../../interface/email.interface";

export default class PaymentController {
  private readonly emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  async findAllPayments(req: Request, res: Response) {
    try {
      const userID = localStorage.getItem("userAuthenticatedId");
      res.status(200).json();
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findPayment(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
