import { Router } from "express";
import Authentication from "../../../controllers/authentication/authentication.controller";
import authenticatedCheck from "../../../middlewares/checkAuthenticated"

class AuthenticationRoute {
  private readonly authentication: Authentication
  public readonly router: Router

  constructor() {
    this.authentication = new Authentication()
    this.router = Router()
    this.initRoutes()
  }

  private initRoutes() {
    this.router.post('/register', this.authentication.register.bind(this.authentication))
    this.router.post('/login', this.authentication.login.bind(this.authentication))
    this.router.post('/setPhoneNumber', this.authentication.setPhoneNumber.bind(this.authentication))
    this.router.get('/getPhoneNumber', this.authentication.getPhoneNumber.bind(this.authentication))
    this.router.post('/setVerifyCode', this.authentication.setVerifyCode.bind(this.authentication))
    this.router.post('/', authenticatedCheck)
  }
}

export default new AuthenticationRoute().router