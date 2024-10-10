import ICategory from "../../interface/category.interface";
import CategoryRepository from "../../repository/category.repository";

export default class CategoryService {
  private readonly categoryRepository: CategoryRepository

  constructor() {
    this.categoryRepository = new CategoryRepository()
  }

  create(data: ICategory): Promise<ICategory> {
    return this.categoryRepository.create(data)
  }

  async findAll(): Promise<ICategory[] | null> {
    return this.categoryRepository.findAll()
  }

  async findById(id: string): Promise<ICategory | null> {
    return this.categoryRepository.findById(id)
  }

  async update(id: string, data: ICategory): Promise<ICategory | null> {
    return this.categoryRepository.update(id, data)
  }

  async delete(id: string): Promise<ICategory | null> {
    return this.categoryRepository.delete(id)
  }
}