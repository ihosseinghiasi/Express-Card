import { Router } from "express";
import AdminController from "../../../../controllers/admin/admin.controller";

class AdminRoute {
  private readonly adminController: AdminController
  public readonly router: Router

  constructor() {
    this.adminController = new AdminController()
    this.router = Router()
    this.initRoutes()
  }

  private initRoutes() {
    this.router.post("/createAdmin", this.adminController.createAdmin.bind(this.adminController))
    this.router.get("/getAllAdmins", this.adminController.findAllAdmins.bind(this.adminController))
    this.router.get("/getAdmin/:id", this.adminController.findAdmin.bind(this.adminController))
    this.router.put("/updateAdmin/:id", this.adminController.updateAdmin.bind(this.adminController))
    this.router.delete("/deleteAdmin/:id", this.adminController.deleteAdmin.bind(this.adminController))
  }
}

export default new AdminRoute().router