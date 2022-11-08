import { Controller, Get, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { IProduct } from "./products.interface";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get(":sku")
  getProductBySku(@Param("sku") sku: number): IProduct {
    const result = this.productsService.getBySku(sku);
    return result;
  }

  @Get()
  getAllProducts(): string[] {
    const result = this.productsService.getAll();
    return result;
  }
}
