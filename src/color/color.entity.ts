import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
  Check,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Media } from "src/media/media.entity";
import { Stock } from "src/stocks/stock.entity";

@Entity({ name: "colors" })
@Check("check_hex", "hex ~ '^#[a-f0-9]{2}[a-f0-9]{2}[a-f0-9]{2}$'")
@Unique("colors_name_hex_key", ["name", "hex"])
export class Color {
  @ApiProperty({ example: "1", description: "unique id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "YELLOW", description: "color name" })
  @Column({
    type: "varchar",
    length: 30,
    unique: true,
  })
  name: string;

  @ApiProperty({ example: "#ffffff", description: "color hex code" })
  @Column({ type: "varchar", length: 7, unique: true })
  hex: string;

  @OneToMany(() => Media, (media) => media.colorId)
  media: Media[];

  @OneToMany(() => Stock, (stock) => stock.colorId)
  stocks: Stock[];
}
