import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Stock } from "src/stock/stock.entity";
import { Media } from "../media/media.entity";
import { Discount } from "../discount/discount.entity";

@Entity({ name: "products" })
export class Product {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "1", description: "unique collection id" })
  @Column({ type: "int", nullable: true, name: "colection_id" })
  collectionId: number;

  @ApiProperty({ example: "From da hood T-shirt", description: "product name" })
  @Column({ type: "varchar", length: 30 })
  name: string;

  @ApiProperty({ example: "neznayou", description: "unique link" })
  @Column({ type: "varchar", length: 30, unique: true })
  slug: string;

  @ApiProperty({ example: 3000, description: "price" })
  @Column({ type: "double precision" })
  price: number;

  @ApiProperty({
    example:
      "This t-shirt started from da bottom. only ... wear these rare items",
    description: "description",
  })
  @Column({ type: "text", nullable: true })
  description: string;

  @ApiProperty({ example: "xzxzxzzzz", description: "sale start date" })
  @Column({ type: "bool", default: false, name: "published_at" })
  released: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => Stock, (stock) => stock.productId)
  stocks: Stock[];

  @OneToMany(() => Media, (media) => media.productId)
  media: Media[];

  @OneToOne(() => Discount, (discount) => discount.productId)
  discount: Discount;
}
