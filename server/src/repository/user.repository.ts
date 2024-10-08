import User from "../models/user";
import IUser from "../interface/user.interface";
import GenricRepository from "./generic.repository"

export default class UserRepository extends GenricRepository<IUser> {
  constructor() {
    super(User)
  }
}
