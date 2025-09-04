import { Response } from "express";
// import _ from lodash
import { AuthRequest } from "../../config/namespase";
import response from "../../config/response";

const me = (req: AuthRequest, res: Response) => {
  if (req.user) {
    const user = req.user;
    return response(res, 200, "Authenticated User Finded .", user);
  }
};

export default me;
