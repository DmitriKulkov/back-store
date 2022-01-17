import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/product.entity";

@Entity({ name: "discounts" })
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  productId: Product;

  @ApiProperty({ example: 1000, description: "discount" })
  @Column({ type: "double precision", nullable: true })
  price: number;

  @ApiProperty({ example: "21/22", description: "discount start date" })
  @Column({ type: "timestamp", nullable: true, name: "starts_at" })
  startsAt: Date;

  @ApiProperty({ example: "4/1/22", description: "discount end date" })
  @Column({ type: "timestamp", nullable: true, name: "ends_at" })
  endsAt: Date;
}
