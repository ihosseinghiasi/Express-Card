import IUser from "../interface/user.interface";
import UserRepository from "../repository/user.repository";

export default class userService {
  private readonly UserRepository: UserRepository

  constructor() {
    this.UserRepository = new UserRepository()
  }

  async create(data: IUser): Promise<IUser> {
    return this.UserRepository.create(data)
  }

  async findAll(): Promise<IUser[]> {
    return this.UserRepository.findAll()
  }

  async findById(id: string): Promise<IUser | null> {
    return this.UserRepository.findById(id)
  }

  async update(id: string, data: IUser): Promise<IUser | null> {
    return this.UserRepository.update(id, data)
  }

  async delete(id: string): Promise<IUser | null> {
    return this.UserRepository.delete(id)
  }
}