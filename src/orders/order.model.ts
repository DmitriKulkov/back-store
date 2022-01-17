import { ApiProperty } from "@nestjs/swagger";
import { OrderItems } from "src/order-items/order-items.entity";
import { User } from "src/user/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "orders" })
export class Order {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Russia, Moscow, Baker St., 4",
    description: "Address",
  })
  @Column({
    type: "varchar",
    length: 50,
    nullable: false,
  })
  address: string;

  @ApiProperty({ example: "110032", description: "Index" })
  @Column({
    type: "int",
    nullable: false,
  })
  shipIndex: number;

  @ApiProperty({ example: "Vladimir", description: "Name" })
  @Column({
    type: "int",
    nullable: false,
  })
  name: string;

  @ApiProperty({ example: "Putin", description: "Surname" })
  @Column({
    type: "varchar",
    length: 50,
    nullable: false,
  })
  surname: string;

  @ApiProperty({ example: "Thebest", description: "Patronymic" })
  @Column({
    type: "varchar",
    length: 50,
    nullable: false,
  })
  patronymic: string;

  @ApiProperty({ example: "88005553535", description: "Phone number" })
  @Column({
    type: "varchar",
    length: 50,
    nullable: false,
  })
  phone: string;

  @ApiProperty({ example: "user@mail.com", description: "Email" })
  @Column({
    type: "varchar",
    length: 50,
    nullable: false,
  })
  email: string;

  @ApiProperty({ example: "9.99", description: "Total cost" })
  @Column({
    type: "double",
    default: 0.0,
  })
  total: number;

  @ApiProperty({ example: "0.99", description: "Shipping cost" })
  @Column({
    type: "double",
    default: 0.0,
  })
  shipping: number;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => OrderItems, (order_items) => order_items.order)
  @JoinColumn({ name: "order_items_id" })
  order_items: OrderItems[];
}
