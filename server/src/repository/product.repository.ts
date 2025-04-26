import IProduct from "../interface/product.interface";
import Product from "../models/product";
import GenericRepository from "./generic.repository";

export default class ProductRepository extends GenericRepository<IProduct> {
  constructor() {
    super(Product);
  }

  async findBytitle(title: string): Promise<IProduct | null> {
    return Product.findOne({ title });
  }
}
