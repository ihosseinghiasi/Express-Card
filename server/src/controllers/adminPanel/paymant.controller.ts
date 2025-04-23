import { Request, Response } from "express";
import PaymentService from "../../services/adminPanel/payment.service";
import IPayment from "../../interface/payment.interface";

export default class PaymentController {
  private readonly paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  async payment(req: Request, res: Response) {
    try {
      console.log("create payment");
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
