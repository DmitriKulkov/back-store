import {
  Controller,
  Get,
  Put,
  Body,
  Delete,
  Param,
  Post,
} from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get("/")
  getAll() {
    return this.productService.getAll();
  }

  @Get("/sellable")
  getAllSellable() {
    return this.productService.getAllSellable();
  }

  @Get("/:id")
  getOne(@Param("id") id: number) {
    return this.productService.getOne(id);
  }

  @Post()
  create(@Body() dto) {
    return this.productService.create(dto);
  }

  @Put()
  update(@Body() dto) {
    return this.productService.update(dto);
  }

  @Delete("/:id")
  delete(@Param("id") id: number) {
    return this.productService.delete(id);
  }
}
