import { ApiProperty } from "@nestjs/swagger";
import { Cart } from "src/cart/cart.entity";
import { Stock } from "src/stock/stock.entity";

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "cart_items" })
export class CartItem {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "3", description: "Quantity of Items" })
  @Column({ type: "int", nullable: false })
  quantity: number;

  @ManyToOne(() => Stock, (stock) => stock.cartItems)
  @JoinColumn({ name: "stock_id" })
  stock: Stock;

  @ManyToOne(() => Cart, (cart) => cart.items)
  @JoinColumn({ name: "cart_id" })
  cart: Cart;
}
