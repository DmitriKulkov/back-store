import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ProductsModule } from "./products/products.module";
import { Product } from "./products/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MediaModule } from "./file/file.module";
import { Color } from "./color/color.entity";
import { File } from "./file/file.entity";
import { CartItemsModule } from "./cart-items/cart-items.module";
import { CategoryModule } from "./category/category.module";
import { CollectionModule } from "./collection/collection.module";
import { ModelModule } from "./model/model.module";
import { OrderItemsModule } from "./order-items/order-items.module";
import { Stock } from "./stocks/stock.entity";
import { StocksModule } from "./stocks/stocks.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Product, Stock, Color, File],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    ProductsModule,
    StocksModule,
    MediaModule,
    CartItemsModule,
    CategoryModule,
    CollectionModule,
    ModelModule,
    OrderItemsModule,
    // UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
