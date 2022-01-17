import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/products/product.entity";
import { Stock } from "./stock.entity";
import { StocksController } from "./stock.controller";
import { StocksService } from "./stock.service";

@Module({
  controllers: [StocksController],
  providers: [StocksService],
  imports: [TypeOrmModule.forFeature([Stock, Product])],
})
export class StocksModule {}
