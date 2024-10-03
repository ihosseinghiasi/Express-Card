import { Request, Response, NextFunction } from "express";

export default class ErrorHandle {
  static notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404).json({ message: " صفحه یافت نشد " })
  }

  static serverError(error: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).json({ message: error.message })
  }
}