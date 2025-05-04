import { Router } from "express";
import PaymentController from "../../../../controllers/adminPanel/payment.controller";

class PaymentRoute {
  private readonly paymentController: PaymentController;
  public readonly router: Router;

  constructor() {
    this.paymentController = new PaymentController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post(
      "/pay",
      this.paymentController.payment.bind(this.paymentController)
    );
    this.router.get(
      "/getAllPayments",
      this.paymentController.findAllPayments.bind(this.paymentController)
    );
    this.router.get(
      "/getPayment/:id",
      this.paymentController.findPayment.bind(this.paymentController)
    );
    this.router.delete(
      "/deletePayment/:id",
      this.paymentController.deletePayment.bind(this.paymentController)
    );
    this.router.get(
      "/paymentReport",
      this.paymentController.paymentReport.bind(this.paymentController)
    );
  }
}

export default new PaymentRoute().router;
