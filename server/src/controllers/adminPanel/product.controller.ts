import { Request, Response } from "express";
import ProductService from "../../services/adminPanel/product.service";
import IProduct from "../../interface/product.interface";
import response from "../../config/response";

export default class ProductController {
  private readonly productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async createProduct(req: Request, res: Response) {
    try {
      const data: IProduct = {
        productName: req.body.productName,
        title: req.body.title,
        categoryTitle: req.body.categoryTitle,
        cycle: req.body.cycle,
        price: req.body.price,
        count: 0,
        description: req.body.description,
        accessible: req.body.accessible,
        image: req.file?.filename ?? "unimage.png",
        fields: req.body.fields.split(","),
      };
      const product = await this.productService.create(data);
      if (!product) {
        return response(res, 400, "Product Not Successfuly Created.");
      }
      return response(res, 201, "Product Successfuly Created.", product);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await this.productService.findAll();
      if (!products) {
        return response(res, 400, "Products Not Successfuly Finded.");
      }
      return response(res, 200, "Products Successfuly Finded.", products);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async getProduct(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const product = await this.productService.findById(id);
      if (!product) {
        return response(res, 404, "Product Not Successfuly Finded.");
      }
      return response(res, 200, "Product Successfuly Finded.", product);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const oldProduct = await this.productService.findById(id);
      if (!oldProduct) {
        return response(res, 400, "Product Not Successfuly Finded.");
      }
      const data: IProduct = {
        productName: req.body.productName,
        title: req.body.title,
        categoryTitle: req.body.categoryTitle,
        cycle: req.body.cycle,
        count: req.body.count,
        price: req.body.price,
        description: req.body.description,
        accessible: req.body.accessible,
        image: req.file?.filename ?? oldProduct?.image,
        fields: req.body.fields.split(","),
      };
      const product = await this.productService.update(id, data);
      if (!product) {
        return response(res, 400, "Product Not Successfuly Updated.");
      }
      return response(res, 200, "Product Successfuly Updated.", product);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const product = await this.productService.delete(id);
      if (!product) {
        return response(res, 400, "Product Not Successfuly deleted.");
      }
      return response(res, 200, "Product Successfuly deleted.", product);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async IncreaseProductCount(productTitle: string) {
    try {
      const product = await this.productService.findByTitle(productTitle);
      let productID: string = "";
      if (product) {
        Object.values(product).map((p) => {
          productID = p._id;
        });
        const data: IProduct = {
          productName: product.productName,
          title: product.title,
          categoryTitle: product.categoryTitle,
          cycle: product.cycle,
          count: product.count + 1,
          price: product.price,
          description: product.description,
          accessible: product.accessible,
          image: product.image,
          fields: product.fields,
        };
        await this.productService.update(productID, data);
      }
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async DecreaseProductCount(productTitle: string) {
    try {
      const product = await this.productService.findByTitle(productTitle);
      let productID: string = "";
      if (product) {
        Object.values(product).map((p) => {
          productID = p._id;
        });
        const data: IProduct = {
          productName: product.productName,
          title: product.title,
          categoryTitle: product.categoryTitle,
          cycle: product.cycle,
          count: product.count - 1,
          price: product.price,
          description: product.description,
          accessible: product.accessible,
          image: product.image,
          fields: product.fields,
        };
        await this.productService.update(productID, data);
      }
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async ProductStoreReport(req: Request, res: Response) {
    try {
      const products: IProduct[] | null = await this.productService.findAll();
      const productTitles: string[] = [];
      const productValues: number[] = [];
      const colors: string[] = [];
      Object.values(products!).forEach((product) => {
        productTitles.push(product.title);
        productValues.push(product.count);
        const hexLetter = (Math.random() * 0xfffff * 1000000).toString(16);
        colors.push(`#${hexLetter.slice(0, 6)}`);
      });
      res
        .status(200)
        .json({ titles: productTitles, values: productValues, colors });
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }
}
