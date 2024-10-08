import { Request, Response } from "express";
import IAdmin from "../../interface/admin.interface";
import AdminService from "../../services/admin.service";

export default class AdminController {
  private readonly AdminService: AdminService

  constructor() {
    this.AdminService = new AdminService()
  }

  async createAdmin(req: Request, res: Response) {
    try {
      const data: IAdmin = req.body.admin
      const admin = await this.AdminService.create(data)
      res.status(201).json(admin)
    } catch (error: unknown) {
      throw new Error(error as string)
    }    
  } 

  async findAllAdmins(req: Request, res: Response) {
    try {
      const Admins = await this.AdminService.findAll()
      res.status(200).json(Admins)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async findAdmin(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const admin = await this.AdminService.findById(id)
      res.status(200).json(admin)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  } 

  async updateAdmin(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const data: IAdmin = req.body.data
      const admin = await this.AdminService.update(id, data)
      res.status(200).json(admin)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async deleteAdmin(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const admin = await this.AdminService.delete(id)
      res.status(200).json(admin)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}