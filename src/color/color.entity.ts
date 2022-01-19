import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/product.entity";

@Entity({ name: "colors" })
export class Color {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "YELLOW", description: "color name" })
  @Column({ type: "varchar", length: 30 })
  name: string;

  @ApiProperty({ example: "#ffffff", description: "color hex code" })
  @Column({ type: "varchar", length: 7, unique: true })
  hex: string;

  @OneToMany(() => Product, (products) => products.color)
  products: Product[];
}
