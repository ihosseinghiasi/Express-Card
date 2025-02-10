import { Router } from "express";
import PaymentController from "../../../../controllers/adminPanel/paymant.controller";

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
      this.paymentController.pay.bind(this.paymentController)
    );
  }
}

export default new PaymentRoute().router;
