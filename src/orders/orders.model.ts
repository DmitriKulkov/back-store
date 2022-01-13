import {
  Column,
  DataType,
  ForeignKey,
  IsEmail,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/users.model";

interface OrdersCreationAttrs {
  id: number;
  userId: number;
  address: string;
  shipIndex: number;
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
  email: string;
  total: number;
  shipping: number;
}

@Table({ tableName: "orders" })
export class Order extends Model<Order, OrdersCreationAttrs> {
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

  @ApiProperty({
    example: "Russia, Moscow, Baker St., 4",
    description: "Address",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ApiProperty({ example: "110032", description: "Index" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  shipIndex: number;

  @ApiProperty({ example: "Vladimir", description: "Name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: "Putin", description: "Surname" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname: string;

  @ApiProperty({ example: "Thebest", description: "Patronymic" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  patronymic: string;

  @ApiProperty({ example: "88005553535", description: "Phone number" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @IsEmail
  @ApiProperty({ example: "user@mail.com", description: "Email" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: "9.99", description: "Total cost" })
  @Column({
    type: DataType.DOUBLE,
    defaultValue: 0.0,
  })
  total: number;

  @ApiProperty({ example: "0.99", description: "Shipping cost" })
  @Column({
    type: DataType.DOUBLE,
    defaultValue: 0.0,
  })
  shipping: number;
}
