import { Router } from "express";
import Authentication from "../../../controllers/authentication/authentication.controller";

class AuthenticationRoute {
  private readonly authentication: Authentication
  public readonly router: Router

  constructor() {
    this.authentication = new Authentication()
    this.router = Router()
    this.initRoutes()
  }

  private initRoutes() {
    this.router.post('/getPhoneNumber', this.authentication.getPhoneNumber.bind(this.authentication))
  }
}

export default new AuthenticationRoute().router