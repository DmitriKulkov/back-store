import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Color, Size } from "src/enums";
import { Product } from "src/products/product.entity";
import { OneToMany } from "typeorm";
import { OrderItems } from "src/order-items/order-items.entity";

@Entity({ name: "stocks" })
export class Stock {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.stocks, {
    primary: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  productId: Product;

  @ApiProperty({ example: "BLACK", description: "product color" })
  @Column({ type: "enum", enum: Color, enumName: "colors" })
  color: string;

  @ApiProperty({ example: "XS", description: "product size" })
  @Column({ type: "enum", enum: Size, enumName: "sizes", nullable: true })
  size: string;

  @ApiProperty({ example: 10, description: "product quantity" })
  @Column({ type: "int" })
  quantity: number;

  @OneToMany(() => OrderItems, (order_items) => order_items.stock)
  order_items: OrderItems[];
}
