import { Request, Response } from "express";
import bcrypt from "bcrypt";
import IUser from "../../interface/user.interface";
import UserService from "../../services/adminPanel/user.service";
import response from "../../config/response";

export default class AdminController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createAdmin(req: Request, res: Response) {
    try {
      const data: IUser = req.body.admin;
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt);
      data.isAdmin = true;
      const admin = await this.userService.create(data);
      if (!admin) {
        return response(res, 404, "Admin Not Created.");
      }
      return response(res, 201, "Admin Successfuly Created !", admin);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAllAdmins(req: Request, res: Response) {
    try {
      const admins = await this.userService.findAll();
      if (!admins) {
        return response(res, 400, "Admins Not Finded.");
      }
      return response(res, 200, "Admins Successfuly Finded !", admins);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAdmin(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const admin = await this.userService.findById(id);
      if (!admin) {
        return response(res, 400, "Admin Not Finded.");
      }
      return response(res, 200, "Admin Successfuly Finded !", admin);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async updateAdmin(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const data: IUser = req.body.admin;
      if (data.password.length <= 16) {
        const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password, salt);
      }
      const admin = await this.userService.update(id, data);
      if (!admin) {
        return response(res, 400, "Admin Not Updated.");
      }
      return response(res, 200, "Admin Successfuly Updated !", admin);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteAdmin(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const admin = await this.userService.delete(id);
      if (!admin) {
        return response(res, 400, "Admin Not Deleted.");
      }
      return response(res, 200, "Admin Successfuly Deleted !", admin);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
