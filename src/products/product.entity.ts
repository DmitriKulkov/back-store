import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Stock } from "src/stocks/stock.entity";
import { Media } from "../media/media.entity";

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

  @ApiProperty({ example: 1000, description: "discount" })
  @Column({ type: "double precision", nullable: true })
  discount: number;

  @ApiProperty({ example: "21/22", description: "discount start date" })
  @Column({ type: "timestamp", nullable: true, name: "starts_at" })
  startsAt: Date;

  @ApiProperty({ example: "4/1/22", description: "discount end date" })
  @Column({ type: "timestamp", nullable: true, name: "ends_at" })
  endsAt: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => Stock, (stock) => stock.productId)
  stocks: Stock[];

  @OneToMany(() => Media, (media) => media.productId)
  media: Media[];
}
