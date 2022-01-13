import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface ColorsCreationAttrs {
  id: number;
  name: string;
  hex: string;
}

@Table({ tableName: "colors" })
export class Color extends Model<Color, ColorsCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Red", description: "Color name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "Red",
    description: "Hexadecimal representation of the color",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hex: string;
}
