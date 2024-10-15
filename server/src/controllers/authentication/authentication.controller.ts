import { Request, Response } from "express";
import bcrypt from "bcrypt"
import IUser from "../../interface/user.interface";
import UserService from "../../services/adminPanel/user.service";
import AdminService from "../../services/adminPanel/admin.service";
import {createToken, maxAge} from "../../middlewares/createToken";

export default class UserAuthentication {
  private _phoneNumber?: string
  private _verifySmsCode?: string
  private readonly userService: UserService
  private readonly adminService: AdminService
 
  constructor() {
    this.userService = new UserService()
    this.adminService = new AdminService()
  }

  async register(req: Request, res: Response) {
    try {
      const data: IUser = req.body.user
      const salt = await bcrypt.genSalt()
      data.password = await bcrypt.hash(data.password, salt)
      const user = await this.userService.create(data)
      
      const token = createToken(data.id)
      res.cookie('comercial', token, {
          httpOnly: false,
          maxAge: 1000 * maxAge
      })
      res.status(201).json(user)
   } catch (error: unknown) {
    throw new Error(error as string)
   }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body.data
      const user = await this.userService.login(email)
      if (user) {
        const authentication = await bcrypt.compare(password, user.password)
        if (authentication) {
          const token = createToken(user.id)
          res.cookie('comercial', token, {
          httpOnly: false,
          maxAge: 1000 * maxAge
      })
        res.status(201).json(user)
        } else {
          const admin = await this.adminService.login(email)
          if (admin) {
            const authentication = await bcrypt.compare(password, admin.password)
            if (authentication) {
              const token = createToken(admin.id)
              res.cookie('comercial', token, {
              httpOnly: false,
              maxAge: 1000 * maxAge
             })
            res.status(201).json(admin)
            }
          }
        }
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

   async getPhoneNumber(req: Request, res: Response) {
    const phoneNumber: string = req.body.phoneNumber
     console.log(phoneNumber)
  }
}