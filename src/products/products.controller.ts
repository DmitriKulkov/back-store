import { Controller, Get, Put, Body, Delete, Param } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller("product")
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get("/")
  getAll() {
    return this.productService.getAll();
  }

  @Get("/:id")
  getOne(@Param("id") id: number) {
    return this.productService.getOne(id);
  }

  @Put()
  update(@Body() dto) {
    return this.productService.update(dto);
  }

  @Delete()
  delete(@Param("id") id: number) {
    return this.productService.delete(id);
  }
}
