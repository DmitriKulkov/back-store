import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Stock } from "src/stock/stock.entity";
import { ManyToOne } from "typeorm";
import { JoinColumn } from "typeorm";
import { ProductCategories } from "src/product-categories/product-categories.entity";
import { Media } from "../media/media.entity";
import { Discount } from "../discount/discount.entity";
import { Collection } from "src/collections/collection.entity";

@Entity({ name: "products" })
export class Product {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToMany(() => Stock, (stock) => stock.productId)
  stocks: Stock[];

  @ManyToOne(() => Collection, (collection) => collection.products)
  @JoinColumn({ name: "collection_id" })
  collection: Collection;

  @ManyToOne(
    () => ProductCategories,
    (product_category) => product_category.products,
  )
  @JoinColumn({ name: "category_id" })
  product_category: ProductCategories;
  @OneToMany(() => Media, (media) => media.productId)
  media: Media[];

  @OneToOne(() => Discount, (discount) => discount.productId)
  discount: Discount;
}
