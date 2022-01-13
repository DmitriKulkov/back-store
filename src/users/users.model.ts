import {
  Column,
  DataType,
  IsDate,
  IsEmail,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs {
  id: number;
  name: string;
  email: string;
  password: string;
  lastLogin: Date;
  role: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: "user@mail.ru", description: "Email" })
  @IsEmail
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "MegaKiller777", description: "User Name" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: "12345678", description: "Password" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({
    example: "01.01.2022",
    description: "Last session date",
  })
  @IsDate
  @Column({ type: DataType.DATE })
  lastLogin: Date;

  @ApiProperty({ example: "user", description: "User role" })
  @Column({ type: DataType.STRING, allowNull: false, defaultValue: "user" })
  role: string;
}
