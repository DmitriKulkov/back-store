import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/products/product.entity";
import { Stock } from "./stock.entity";
import { StocksController } from "./stocks.controller";
import { StocksService } from "./stocks.service";

@Module({
  controllers: [StocksController],
  providers: [StocksService],
  imports: [TypeOrmModule.forFeature([Stock, Product])],
})
export class StocksModule {}
