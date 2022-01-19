import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
<<<<<<< HEAD:src/media/media.entity.ts
import { Product } from "src/product/product.entity";
import { Color } from "src/color/color.entity";
=======
import { Product } from "src/products/product.entity";
>>>>>>> Dmitri:src/file/file.entity.ts

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
  })
  @JoinColumn({ name: "product_id" })
  product: Product;
<<<<<<< HEAD:src/media/media.entity.ts

  @ManyToOne(() => Color, (color) => color.media, {
    primary: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "color_id" })
  colorId: Color;
=======
>>>>>>> Dmitri:src/file/file.entity.ts
}
