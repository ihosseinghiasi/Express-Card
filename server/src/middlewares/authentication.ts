import { Response, NextFunction } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import JwtPayload from "../interface/jwtPayload.interface";
import response from "../config/response";
import { AuthRequest } from "../config/namespase";

const isLoggined = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return response(res, 401, "Access Denied !");
    }
    const jwt_key = process.env.JWT_KEY;
    if (!jwt_key) {
      response(res, 401, "Jwt Key Not Found !");
    }

    const decodedToken = jwt.verify(token, jwt_key!) as JwtPayload;

    const user = await User.findById(decodedToken.id);
    if (!user) {
      return response(res, 404, "User Not Finded.");
    }
    req.user = user;
    next();
  } catch (err: unknown) {
    return response(res, 400, "Invalid Token");
  }
};

export default isLoggined;
