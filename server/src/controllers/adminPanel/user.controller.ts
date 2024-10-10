import { Request, Response } from "express";
import bcrypt from "bcrypt"
import UserService from "../../services/adminPanel/user.service";
import IUser from "../../interface/user.interface";

export default class userController {
  private readonly userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  async createUser(req: Request, res: Response) {
    try {
      const data: IUser = req.body.user
      const salt = await bcrypt.genSalt()
      data.password = await bcrypt.hash(data.password, salt)
      const user = await this.userService.create(data)
      res.status(201).json(user)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async findAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll()
      res.status(200).json(users)
    } catch (error) {
      throw new Error(error as string)      
    }
  }

  async findUser(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const user = await this.userService.findById(id)
      res.status(200).json(user)
    } catch (error) {
      throw new Error(error as string)
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const data: IUser = req.body.values
      const id: string = req.params.id
      if (data.password.length <= 16) {
        const salt = await bcrypt.genSalt()
        data.password = await bcrypt.hash(data.password, salt)
      }
      const user = await this.userService.update(id, data)
      res.status(201).json(user)
    } catch (error: unknown) {
      throw new Error(error as string)      
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const id: string = req.params.id
      const user = await this.userService.delete(id)
      res.status(201).json(user)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}