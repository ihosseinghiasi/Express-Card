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

  async findAllPayments(req: Request, res: Response) {
    try {
      const payments = await this.paymentService.findAll();
      res.status(200).json(payments);
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

  async deletePayment(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const payment = await this.paymentService.delete(id);
      res.status(200).json(payment);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async paymentReport(req: Request, res: Response) {
    try {
      const payments: IPayment[] | null = await this.paymentService.findAll();
      const paymentTitles: string[] = [];
      const paymentValues: number[] = [];
      const colors: string[] = [];
      Object.values(payments!).forEach((payment) => {
        paymentTitles.push(payment.title);
        paymentValues.push(payment.totalPrice);
        const hexLetter = (Math.random() * 0xfffff * 1000000).toString(16);
        colors.push(`#${hexLetter.slice(0, 6)}`);
      });
      res
        .status(200)
        .json({ titels: paymentTitles, values: paymentValues, colors });
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
