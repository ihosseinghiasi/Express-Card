import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import Admin from "../models/admin";
import jwt from "jsonwebtoken";

const authenticatedCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.comercial;
  console.log(token);
  if (token) {
    jwt.verify(
      token,
      "nodejs is program language",
      async (err: unknown, decodedToken: any) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await User.findById(decodedToken.id);
          if (user) {
            res.json({ status: true, userType: "user", person: user });
          } else {
            const admin = await Admin.findById(decodedToken.id);
            if (admin) {
              res.json({ status: true, userType: "admin", person: admin });
            } else {
              res.json({ status: false });
            }
            next();
          }
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};

export default authenticatedCheck;
