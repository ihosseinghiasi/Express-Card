import Admin from "../models/admin";
import GenericRepository from "./generic.repository";
import IAdmin from "../interface/admin.interface";

export default class AdminRepository extends GenericRepository<IAdmin> {
  constructor() {
    super(Admin)
  }

  async login(email: string): Promise<IAdmin | null> {
    return Admin.findOne({email})
  }

}
