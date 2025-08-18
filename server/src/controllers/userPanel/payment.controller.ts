import { Request, Response } from "express";
import PaymentService from "../../services/adminPanel/payment.service";
import ProductService from "../../services/adminPanel/product.service";
import IPayment from "../../interface/payment.interface";
import IProduct from "../../interface/product.interface";
import response from "../../config/response";

export default class PaymentController {
  private readonly paymentService: PaymentService;
  private readonly productService: ProductService;

  constructor() {
    this.paymentService = new PaymentService();
    this.productService = new ProductService();
  }

  async findAllPayments(req: Request, res: Response) {
    try {
      const userPayments = await this.getUserPayments();
      if (!userPayments) {
        return response(
          res,
          400,
          "Payments Of The User Not Successfuly Finded."
        );
      }
      return response(res, 200, "Payments Of The User Successfuly Finded.", userPayments);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findPayment(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const payment = await this.paymentService.findById(id);
            if (!payment) {
              return response(
                res,
                400,
                "Payments Of The User Not Successfuly Finded."
              );
            }
            return response(
              res,
              200,
              "Payments Of The User Successfuly Finded.",
              payment
            );

    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getUserPayments(): Promise<IPayment[] | null> {
    const userID = localStorage.getItem("userAuthenticatedId");
    const payments: IPayment[] | null = await this.paymentService.findAll();
    const userPayments: IPayment[] | null = payments!.filter((payment) => {
      return payment.userId === userID;
    });
    return userPayments;
  }

  async paymentReport(req: Request, res: Response) {
    try {
      const userPayments = await this.getUserPayments();
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
        Object.values(userPayments!).forEach((payment) => {
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
