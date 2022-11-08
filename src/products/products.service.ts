import { Injectable } from "@nestjs/common";
import { IProduct } from "./products.interface";
import { NotFoundException } from "@nestjs/common";
// import * as productJSON from "../data/products.json"; broken !
import productJSON from "../data/products.js";

@Injectable()
export class ProductsService {
  private readonly products: IProduct[] = productJSON;

  getBySku(sku: number): IProduct {
    console.log("Looking for product with sku :: " + sku);
    const result = this.products.find((product) => product.sku === Number(sku));
    return result;
  }

  getAll(): string[] {
    const result = this.products.map((product) => product.itemName);
    console.log(result);
    return result;
  }
}
