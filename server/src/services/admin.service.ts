import IAdmin from "../interface/admin.interface";
import AdminRepository from "../repository/admin.repository";

export default class AdminService {
  private readonly AdminRepository: AdminRepository

  constructor() {
    this.AdminRepository = new AdminRepository()
  }

  async create(data: IAdmin): Promise<IAdmin> {
    return this.AdminRepository.create(data)
  }

  async findAll(): Promise<IAdmin[] | null> {
    return this.AdminRepository.findAll()
  }

  async findById(id: string): Promise<IAdmin | null> {
    return this.AdminRepository.findById(id)
  }

  async update(id: string, data: IAdmin): Promise<IAdmin | null> {
    return this.AdminRepository.update(id, data)
  }

  async delete(id: string): Promise<IAdmin | null> {
    return this.AdminRepository.delete(id)
  }
}