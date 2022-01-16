import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Media } from "src/media/media.entity";
import { Stock } from "src/stocks/stock.entity";

@Entity({ name: "colors" })
export class Color {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "YELLOW", description: "color name" })
  @Column({ type: "varchar", length: 30, unique: true })
  name: string;

  @OneToMany(() => Media, (media) => media.colorId)
  media: Media[];

  @OneToMany(() => Stock, (stock) => stock.colorId)
  stocks: Stock[];
}
