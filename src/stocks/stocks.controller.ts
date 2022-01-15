import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { StocksService } from "./stocks.service";

@Controller("stocks")
export class StocksController {
  constructor(private stockService: StocksService) {}

  @Get("/")
  getAll() {
    return this.stockService.getAll();
  }

  @Get("/:id")
  getOne(@Param("id") id: number) {
    return this.stockService.getOne(id);
  }

  @Post()
  create(@Body() dto) {
    return this.stockService.create(dto);
  }

  @Put()
  update(@Body() dto) {
    return this.stockService.update(dto);
  }

  @Delete("/:id")
  delete(@Param("id") id: number) {
    return this.stockService.delete(id);
  }
}
