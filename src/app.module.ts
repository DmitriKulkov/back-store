import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ProductModule } from "./product/product.module";
import { Product } from "./product/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Stock } from "./stock/stock.entity";
import { MediaModule } from "./media/media.module";
import { ColorModule } from "./color/color.module";
import { Color } from "./color/color.entity";
import { Media } from "./media/media.entity";
import { Discount } from "./discount/discount.entity";
import { CartModule } from "./cart/cart.module";
import { DiscountModule } from "./discount/discount.module";
import { Order } from "./order/order.entity";
import { OrderItem } from "./order-item/order-item.entity";
import { Cart } from "./cart/cart.entity";
import { CartItem } from "src/cart/cart-item.entity";
import { User } from "./user/user.entity";
import { UserModule } from "./user/user.module";
import { Collection } from "./collection/collection.entity";
import { Category } from "./category/category.entity";
import { StockModule } from "./stock/stock.module";

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
      password: "root", //process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [
        Product,
        Stock,
        Color,
        Media,
        Discount,
        Order,
        OrderItem,
        Cart,
        CartItem,
        User,
        Collection,
        Category,
      ],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    ProductModule,
    StockModule,
    MediaModule,
    ColorModule,
    CartModule,
    DiscountModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
