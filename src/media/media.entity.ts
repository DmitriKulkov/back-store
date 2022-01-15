import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/product.entity";
import { Color } from "src/color/color.entity";

@Entity({ name: "media" })
export class Media {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "YELLOW", description: "color name" })
  @Column({ type: "varchar", length: 30 })
  name: string;

  @ManyToOne(() => Product, (product) => product, {
    primary: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  productId: Product;

  @ManyToOne(() => Color, (color) => color.media, {
    primary: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "color_id" })
  colorId: Color;
}
