import IAdmin from "../../interface/admin.interface";
import AdminRepository from "../../repository/admin.repository";

export default class AdminService {
  private readonly adminRepository: AdminRepository

  constructor() {
    this.adminRepository = new AdminRepository()
  }

  async create(data: IAdmin): Promise<IAdmin> {
    return this.adminRepository.create(data)
  }

  async findAll(): Promise<IAdmin[] | null> {
    return this.adminRepository.findAll()
  }

  async findById(id: string): Promise<IAdmin | null> {
    return this.adminRepository.findById(id)
  }

  async update(id: string, data: IAdmin): Promise<IAdmin | null> {
    return this.adminRepository.update(id, data)
  }

  async delete(id: string): Promise<IAdmin | null> {
    return this.adminRepository.delete(id)
  }
}