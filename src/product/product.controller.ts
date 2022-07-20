import {
  Controller,
  Get,
  Put,
  Body,
  Delete,
  Param,
  Post,
  Req,
  Query,
  Response
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { Response as Res } from 'express';

@Controller("products")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get("/")
  getAll(@Query() que, @Response() res: Res) {
    // return this.productService.getAll(que);
    this.productService.getAll(que, res).then((p) => {
      return res.send(p);
    });
  }

  @Get("/sellable")
  getAllSellable() {
    return this.productService.getAllReleased();
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

  @Get("/collection/:collection")
  getProductsByCollection(@Param("collection") collection: string, @Query() que){
    return this.productService.getByCollection(collection, que);
  }

  @Get("/slug/:slug")
  getBySlug(@Param("slug") slug: string){
    return this.productService.getBySlug(slug);
  }
}
