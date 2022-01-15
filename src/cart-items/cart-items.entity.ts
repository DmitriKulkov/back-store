import { ApiProperty } from "@nestjs/swagger";
import { Cart } from "src/carts/carts.model";
import { OrderItems } from "src/order-items/order-items.entity";
import { Stock } from "src/stocks/stock.entity";
import { User } from "src/users/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @ManyToOne(() => Cart, (cart) => cart.cart_items)
  cart: Cart;
}
