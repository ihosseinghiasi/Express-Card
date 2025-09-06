import { Request, Response } from "express";
import PaymentService from "../../services/adminPanel/payment.service";
import IPayment from "../../interface/payment.interface";
import ProductService from "../../services/adminPanel/product.service";
import IProduct from "../../interface/product.interface";
import response from "../../config/response";

export default class PaymentController {
  private readonly paymentService: PaymentService;
  private readonly productService: ProductService;

  constructor() {
    this.paymentService = new PaymentService();
    this.productService = new ProductService();
  }

  async payment(req: Request, res: Response) {
    try {
      const data: IPayment = req.body.data;
      const payment = await this.paymentService.create(data);
      if (!payment) {
        return response(res, 400, "Payment Not Successfuly Finded.");
      }
      return response(res, 201, "Payment Successfuly Finded.", payment);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async findAllPayments(req: Request, res: Response) {
    try {
      console.log(req.user);
      const payments = await this.paymentService.findAll();
      if (!payments) {
        return response(res, 400, "Payment Not Successfuly Finded.");
      }
      return response(res, 200, "Payment Successfuly Finded.", payments);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findPayment(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const payment = await this.paymentService.findById(id);
      if (!payment) {
        return response(res, 404, "Payment Not Successfuly Finded.");
      }
      return response(res, 200, "Payment Successfuly Finded.", payment);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deletePayment(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const payment = await this.paymentService.delete(id);
      if (!payment) {
        return response(res, 400, "Payment Not Successfuly Deleted.");
      }
      return response(res, 201, "Payment Successfuly Deleted.", payment);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async paymentReport(req: Request, res: Response) {
    try {
      const payments: IPayment[] | null = await this.paymentService.findAll();
      const products: IProduct[] | null = await this.productService.findAll();
      const productTitles: string[] = [];
      const paymentValues: number[] = [];
      const colors: string[] = [];
      const hexLetter = (Math.random() * 0xfffff * 1000000).toString(16);
      colors.push(`#${hexLetter.slice(0, 6)}`);
      let totalPrice = 0;
      productTitles.push("تمام پرداختی ها");
      paymentValues.push(totalPrice);
      Object.values(products!).forEach((product) => {
        let totalProduct = 0;
        Object.values(payments!).forEach((payment) => {
          if (product.title === payment.title) {
            totalProduct += payment.totalPrice;
          }
        });
        productTitles.push(product.title);
        paymentValues.push(totalProduct);
        totalPrice += totalProduct;
        const hexLetter = (Math.random() * 0xfffff * 1000000).toString(16);
        colors.push(`#${hexLetter.slice(0, 6)}`);
      });
      paymentValues[0] = totalPrice;
      res
        .status(200)
        .json({ titles: productTitles, values: paymentValues, colors });
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
