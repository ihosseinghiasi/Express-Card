import { Request, Response } from "express";
import PaymentService from "../../services/adminPanel/payment.service";
import IPayment from "../../interface/payment.interface";

export default class PaymentController {
  private readonly paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  async findAllPayments(req: Request, res: Response) {
    try {
      const userID = localStorage.getItem("userAuthenticatedId");
      const payments: IPayment[] | null = await this.paymentService.findAll();
      const userPayments = payments?.filter((payment) => {
        return payment.userId === userID;
      });
      res.status(200).json(userPayments);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findPayment(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const payment = await this.paymentService.findById(id);
      res.status(200).json(payment);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
