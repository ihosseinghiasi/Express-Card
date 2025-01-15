import { Request, Response } from "express";
const pd = require("../date/persianDate");

export default class PersianDate {
  getPersianDate(req: Request, res: Response) {
    const persianDate = pd
    res.json(persianDate)
  }
}
