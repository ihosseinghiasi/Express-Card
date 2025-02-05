import { Request, Response } from "express";
import IUser from "../../interface/user.interface";
import UserService from "../../services/adminPanel/user.service";
import bcrypt from "bcrypt";

export default class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async findUser(req: Request, res: Response) {
    try {
      const id: string = req.body.id;
      const user = await this.userService.findById(id);
      res.status(200).json(user);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const data: IUser = req.body.user;
      const id: string = req.body.id;
      if (data.password.length <= 16) {
        const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password, salt);
      }
      const user = await this.userService.update(id, data);
      res.status(201).json(user);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
