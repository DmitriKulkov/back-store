import { ApiProperty } from "@nestjs/swagger";
import { Stock } from "src/stocks/stock.entity";
import { User } from "src/users/user.entity";

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "cart-items" })
export class CartItems {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "3", description: "Quantity of Items" })
  @Column({ type: "int", nullable: false })
  quantity: number;

  @ManyToOne(() => Stock, (stock) => stock.cart_items)
  @JoinColumn({ name: "stock_id" })
  stock: Stock;

  @ManyToOne(() => User, (user) => user.cartItems)
  @JoinColumn({ name: "user_id" })
  user: User;
}
