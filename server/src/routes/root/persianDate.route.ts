import { Router } from "express";
import PersianDate from "../../config/persianDate";

class PersianDateRoute {
  private readonly persianDate: PersianDate;
  public readonly router: Router;

  constructor() {
    this.persianDate = new PersianDate();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(
      "/getPersianDate",
      this.persianDate.getPersianDate.bind(this.persianDate)
    );
  }
}

export default new PersianDateRoute().router;
