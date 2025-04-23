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
      const data: IPayment = req.body.data;
      const payment = await this.paymentService.create(data);
      res.status(200).json(payment);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
