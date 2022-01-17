import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "src/enums";
import { OneToOne } from "typeorm";
import { Order } from "src/orders/order.model";
import { Cart } from "src/cart/cart.entity";

@Entity({ name: "users" })
export class User {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "user@mail.ru", description: "Email" })
  @Column({ type: "varchar", unique: true })
  email: string;

  @ApiProperty({ example: "12345678", description: "Password" })
  @Column({ type: "varchar", nullable: true })
  password: string;

  @ApiProperty({
    example: "01.01.2022",
    description: "Last session date",
  })
  @Column({ type: "timestamp", nullable: true, name: "last_login" })
  lastLogin: Date;

  @ApiProperty({ example: "user", description: "User role" })
  @Column({ type: "enum", default: UserRole.USER })
  role: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToOne(() => Cart)
  cart: Cart;
}
