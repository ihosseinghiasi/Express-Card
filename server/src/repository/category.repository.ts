import Category from "../models/category";
import ICategory from "../interface/category.interface";
import GenericRepository from "./generic.repository";

export default class CategoryRepository extends GenericRepository<ICategory> {
  constructor() {
    super(Category)
  }
}