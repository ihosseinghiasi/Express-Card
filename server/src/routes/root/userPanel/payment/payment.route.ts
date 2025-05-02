import { Router } from "express";
import PaymentController from "../../../../controllers/userPanel/payment.controller";

class PaymentRoute {
  private readonly paymentController: PaymentController;
  public readonly router: Router;

  constructor() {
    this.paymentController = new PaymentController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(
      "/getAllPayments",
      this.paymentController.findAllPayments.bind(this.paymentController)
    );
    this.router.get(
      "/getPayment/:id",
      this.paymentController.findPayment.bind(this.paymentController)
    );
  }
}

export default new PaymentRoute().router;
