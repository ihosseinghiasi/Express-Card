import { Request, Response } from "express";
import _ from "lodash";
import response from "../../config/response";

export default class Dashboard {
  me(req: Request, res: Response) {
    if (!req.user) {
      return response(res, 404, "Authenticated User Not Finded.");
    }
    const user = _.pick(req.user, ["firstName", "lastName"]);
    return response(res, 200, "Authenticated User Finded.", user);
  }
}
