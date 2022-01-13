import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductsController } from "./products.controller";
import { Product } from "./products.model";
import { ProductService } from "./products.service";

@Module({
  controllers: [ProductsController],
  providers: [ProductService],
  imports: [SequelizeModule.forFeature([Product])],
})
export class ProductsModule {}
