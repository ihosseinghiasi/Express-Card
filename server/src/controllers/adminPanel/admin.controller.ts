import { Request, Response } from "express";
import bcrypt from "bcrypt";
import IAdmin from "../../interface/admin.interface";
import AdminService from "../../services/adminPanel/admin.service";
import response from "../../config/response";

export default class AdminController {
  private readonly AdminService: AdminService;

  constructor() {
    this.AdminService = new AdminService();
  }

  async createAdmin(req: Request, res: Response) {
    try {
      const data: IAdmin = req.body.admin;
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt);
      const admin = await this.AdminService.create(data);
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
      const admins = await this.AdminService.findAll();
      if (!admins) {
        return response(res, 400, "Admins Not Found.");
      }
      return response(res, 200, "Admins Successfuly Founded !", admins);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAdmin(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const admin = await this.AdminService.findById(id);
      if (!admin) {
        return response(res, 400, "Admin Not Founded.");
      }
      return response(res, 200, "Admin Successfuly Founded !", admin);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async updateAdmin(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const data: IAdmin = req.body.admin;
      if (data.password.length <= 16) {
        const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password, salt);
      }
      const admin = await this.AdminService.update(id, data);
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
      const admin = await this.AdminService.delete(id);
      if (!admin) {
        return response(res, 400, "Admin Not Deleted.");
      }
      return response(res, 200, "Admin Successfuly Deleted !", admin);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
