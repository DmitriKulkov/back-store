import { ApiProperty } from "@nestjs/swagger";
import { CartItem } from "src/cart/cart-item.entity";
import { User } from "src/user/user.entity";
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

  @OneToMany(() => CartItem, (cartItems) => cartItems.cart)
  items: CartItem[];
}
