import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ProductsModule } from "./product/product.module";
import { Product } from "./product/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StocksModule } from "./stock/stock.module";
import { Stock } from "./stock/stock.entity";
import { MediaModule } from "./media/media.module";
import { ColorsModule } from "./color/color.module";
import { Color } from "./color/color.entity";
import { Media } from "./media/media.entity";
import { Discount } from "./discount/discount.entity";
import { CartModule } from "./cart/cart.module";
import { DiscountModule } from "./discount/discount.module";
import { OrderService } from "./order/order.service";

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
      entities: [Product, Stock, Color, Media, Discount],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    ProductsModule,
    StocksModule,
    MediaModule,
    ColorsModule,
    CartModule,
    DiscountModule,
    // UsersModule,
  ],
  controllers: [],
  providers: [OrderService],
})
export class AppModule {}
