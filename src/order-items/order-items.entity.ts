import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Stock } from "src/stocks/stock.entity";
import { Order } from "src/orders/orders.model";

@Entity({ name: "order-items" })
export class OrderItems {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Stock, (stock) => stock.order_items)
  @JoinColumn({ name: "stock_id" })
  stock: Stock;

  @ManyToOne(() => Order, (order) => order.order_items)
  @JoinColumn({ name: "order_id" })
  order: Order;
}
