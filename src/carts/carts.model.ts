import { ApiProperty } from "@nestjs/swagger";
import { CartItems } from "src/cart-items/cart-items.entity";
import { User } from "src/users/user.entity";
import { OneToMany } from "typeorm";
import { JoinColumn } from "typeorm";
import { OneToOne } from "typeorm";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "carts" })
export class Cart {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => CartItems, (cart_items) => cart_items.cart)
  cart_items: CartItems[];
}
