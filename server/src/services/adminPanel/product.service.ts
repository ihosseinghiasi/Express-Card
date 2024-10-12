import IProduct from "../../interface/product.interface";
import ProductRepository from "../../repository/product.repository";

export default class ProductService {
  private readonly productRepository: ProductRepository

  constructor() {
    this.productRepository = new ProductRepository()
  }

  async create(data: IProduct): Promise<IProduct> {
    return this.productRepository.create(data)
  }

  async findAll(): Promise<IProduct[] | null> {
    return this.productRepository.findAll()
  }

  async findById(id: string): Promise<IProduct | null> {
    return this.productRepository.findById(id)
  }

  async update(id: string, data: IProduct): Promise<IProduct | null> {
    return this.productRepository.update(id, data)
  }

  async delete(id: string): Promise<IProduct | null> {
    return this.productRepository.delete(id)
  }
}