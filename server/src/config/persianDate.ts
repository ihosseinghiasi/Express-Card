import { Request, Response } from "express";
const persianDate = require("persian-date");

class PersianDate {
  constructor(public currentDate: string) {}

  setPersianDate() {
    persianDate.toLocal("fa");
    this.currentDate = new persianDate().format("dddd - DD MMMM YYYY");
  }

  getPersianDate(req: Request, res: Response) {
    try {
      const persianDate: string = this.currentDate;
      if (persianDate) {
        res.status(200).json(persianDate);
      }
    } catch (err: unknown) {
      throw Error(err as string);
    }
  }
}

const persian = new PersianDate(persianDate);
export default persian