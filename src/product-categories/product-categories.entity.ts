import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "product-categories" })
export class ProductCategories {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "T-shirt", description: "Category name" })
  @Column({ type: "varchar", length: 50, nullable: false })
  name: string;

  @OneToMany(() => Product, (products) => products.product_category)
  products: Product[];
}
