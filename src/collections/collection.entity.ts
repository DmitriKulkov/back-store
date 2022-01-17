import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/product/product.entity";

@Entity({ name: "collection" })
export class Collection {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "2020 Autumn Collection",
    description: "Collection Name",
  })
  @Column({ type: "varchar", unique: true, nullable: true })
  name: string;

  @ApiProperty({
    example: "2020 Autumn Collection",
    description: "Collection Description",
  })
  @Column({ type: "text", nullable: true })
  description: string;

  @OneToMany(() => Product, (products) => products.collection)
  products: Product[];
}
