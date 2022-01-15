import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ProductsModule } from "./products/products.module";
import { Product } from "./products/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StocksModule } from "./stocks/stocks.module";
import { Stock } from "./stocks/stock.entity";
import { MediaModule } from "./media/media.module";
import { ColorModule } from "./color/color.module";
import { Color } from "./color/color.entity";
import { Media } from "./media/media.entity";

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
      entities: [Product, Stock, Color, Media],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    ProductsModule,
    StocksModule,
    MediaModule,
    ColorModule,
    // UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
