import User from "../models/user";
import IUser from "../interface/user.interface";
import GenricRepository from "./generic.repository"

export default class UserRepository extends GenricRepository<IUser> {
  constructor() {
    super(User)
  }

   async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  }

  async findByName(name: string): Promise<IUser | null> {
    return User.findOne({ name });
  }
}
