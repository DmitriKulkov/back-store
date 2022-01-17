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
import { CartItem } from "src/cart/cart-item.entity";
import { Color } from "src/color/color.entity";
import { Product } from "src/product/product.entity";
import { OrderItem } from "src/order-item/order-item.entity";

@Entity({ name: "stocks" })
@Unique("stocks_product_id_size_color_id_key", ["color", "size", "product"])
export class Stock {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.stocks, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  product: Product;

  @ApiProperty({ example: "BLACK", description: "product color id" })
  @ManyToOne(() => Color, (color) => color.stocks, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "color_id" })
  color: number;

  @ApiProperty({ example: "XS", description: "product size" })
  @Column({
    type: "enum",
    enum: Size,
    enumName: "sizes",
  })
  size: string;

  @ApiProperty({ example: 10, description: "product quantity" })
  @Column({ type: "int" })
  quantity: number;

  @OneToMany(() => OrderItem, (orderItems) => orderItems)
  orderItems: OrderItem[];

  @OneToMany(() => CartItem, (cartItems) => cartItems.stock)
  cartItems: CartItem[];
}
