import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Order } from "src/orders/order.model";
import { Stock } from "src/stock/stock.entity";

@Entity({ name: "order-items" })
export class OrderItems {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "3", description: "Quantity of Items" })
  @Column({ type: "int", nullable: false })
  quantity: number;

  @ApiProperty({ example: "30", description: "Discount" })
  @Column({ type: "int", nullable: false })
  discount: number;

  @ManyToOne(() => Stock, (stock) => stock.order_items)
  @JoinColumn({ name: "stock_id" })
  stock: Stock;

  @ManyToOne(() => Order, (order) => order.order_items)
  @JoinColumn({ name: "order_id" })
  order: Order;
}
