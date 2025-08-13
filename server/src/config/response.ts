import { Response } from "express";

const response = (
  res: Response,
  statusCode: number,
  message: string,
  data = {}
) => {
  res.status(statusCode).json({
    data,
    message,
  });
};

export default response;
