import { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserService from "../../services/adminPanel/user.service";
import IUser from "../../interface/user.interface";
import response from "../../config/response";

export default class userController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response) {
    try {
      const data: IUser = req.body.user;
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt);
      const user = await this.userService.create(data);
      if (!user) {
        return response(res, 400, "User Not Successfuly Created.");
      }
      return response(res, 201, "User Successfuly Created.", user);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();
      if (!users) {
        return response(res, 400, "Users Not Successfuly Finded.");
      }
      return response(res, 200, "Users Successfuly Finded.", users);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async findUser(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const user = await this.userService.findById(id);
      if (!user) {
        return response(res, 400, "User Not Successfuly Finded.");
      }
      return response(res, 200, "User Successfuly Finded.", user);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const data: IUser = req.body.user;
      const id: string = req.params.id;
      if (data.password.length <= 16) {
        const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password, salt);
      }
      const user = await this.userService.update(id, data);
      if (!user) {
        return response(res, 400, "User Not Successfuly Updated.");
      }
      return response(res, 200, "User Successfuly Updated.", user);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const user = await this.userService.delete(id);
      if (!user) {
        return response(res, 400, "User Not Successfuly Deleted.");
      }
      return response(res, 201, "User Successfuly Deleted.", user);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
