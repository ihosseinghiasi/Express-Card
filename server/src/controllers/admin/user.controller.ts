import { Request, Response } from "express";
import UserService from "../../services/user.service";
import IUser from "../../interface/user.interface";

export default class userController {
  private readonly userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  async createUser(req: Request, res: Response) {
    try {
      const data: IUser = req.body.user
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
    const data: IUser = req.body
    const user = await this.userService.update(data.id, data)
    res.status(201).json(user)
  }

  async deleteUser(req: Request, res: Response) {
    const id: string = req.params.id
    const user = await this.userService.delete(id)
    res.status(201).json(user)
  }
}