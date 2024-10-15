import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import IUser from "../../interface/user.interface";
import UserService from "../../services/adminPanel/user.service";
import {createToken, maxAge} from "../../middlewares/createToken";

export default class UserAuthentication {
  private readonly userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  async register(req: Request, res: Response) {
    const data: IUser = req.body.user
    const salt = await bcrypt.genSalt()
    data.password = await bcrypt.hash(data.password, salt)
    const user = await this.userService.create(data)
    
    const token = createToken(data.id)
    res.cookie('comercial', token, {
        httpOnly: false,
        maxAge: 1000 * maxAge
    })

    res.status(201).json({user: user.id, created: true})

  }
}