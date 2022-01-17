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
import { OneToMany } from "typeorm";
import { OrderItems } from "src/order-items/order-items.entity";
import { CartItems } from "src/cart-items/cart-items.entity";
import { Color } from "src/color/color.entity";
import { Product } from "src/product/product.entity";

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

  @OneToMany(() => OrderItems, (order_items) => order_items.stock)
  order_items: OrderItems[];

  @OneToMany(() => CartItems, (cart_items) => cart_items.stock)
  cart_items: CartItems[];
}
