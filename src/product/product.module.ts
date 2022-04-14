import { forwardRef, Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ModelModule } from "src/model/model.module";

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    TypeOrmModule.forFeature([Product]),
    forwardRef(()=>ModelModule)
  ],
})
export class ProductModule {}
