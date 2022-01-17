import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductModule {}
