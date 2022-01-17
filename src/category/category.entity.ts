import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/product/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" })
export class Category {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "T-shirt", description: "Category name" })
  @Column({ type: "varchar", length: 50, nullable: false })
  name: string;

  @OneToMany(() => Product, (products) => products.category)
  products: Product[];
}
