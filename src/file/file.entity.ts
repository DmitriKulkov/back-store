import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/product.entity";

@Entity({ name: "file" })
export class File {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "YELLOW", description: "color name" })
  @Column({ type: "varchar", length: 30 })
  name: string;

  @ManyToOne(() => Product, (product) => product.files, {
    primary: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  product: Product;
}
