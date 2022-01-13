import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/users.model";

interface CartsCreationAttrs {
  id: number;
  userId: number;
}

@Table({ tableName: "carts" })
export class Cart extends Model<Cart, CartsCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "1", description: "User Id" })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
}
