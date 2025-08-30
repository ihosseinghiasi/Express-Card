import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import response from "../config/response";

const isLoggined = async (req: Request, res: Response, next: NextFunction) => {
  const token = `req.header("x-auth-token")`;
  if (!token) {
    return response(res, 401, "Access Denied !");
  }

  try {
    const jwt_key = process.env.JWT_KEY;
    if (!jwt_key) {
      response(res, 401, "Jwt Key Not Found !");
    }
    const decodedToken = jwt.verify(token, jwt_key!);
    const user = await User.findById(decodedToken);
    if (!user) {
      return response(res, 404, "User Not Finded.");
    }
    req.user = user;
    next();
  } catch (err: unknown) {
    return response(res, 400, "Invalid Token");
  }
};
