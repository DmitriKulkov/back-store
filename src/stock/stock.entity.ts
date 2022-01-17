import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Size } from "src/enums";
import { Product } from "src/products/product.entity";
import { Color } from "src/color/color.entity";

@Entity({ name: "stocks" })
@Unique("stocks_product_id_size_color_id_key", ["colorId", "size", "productId"])
export class Stock {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.stocks, {
    primary: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  productId: Product;

  @ApiProperty({ example: "BLACK", description: "product color id" })
  @ManyToOne(() => Color, (color) => color.stocks, {
    primary: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "color_id" })
  colorId: number;

  @ApiProperty({ example: "XS", description: "product size" })
  @Column({
    type: "enum",
    enum: Size,
    enumName: "sizes",
    primary: true,
  })
  size: string;

  @ApiProperty({ example: 10, description: "product quantity" })
  @Column({ type: "int" })
  quantity: number;
}
