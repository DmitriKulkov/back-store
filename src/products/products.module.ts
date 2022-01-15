import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { Product } from "./product.entity";
import { ProductService } from "./products.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [ProductsController],
  providers: [ProductService],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductsModule {}
