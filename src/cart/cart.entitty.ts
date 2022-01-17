import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "carts" })
export class Cart {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "1", description: "User Id" })
  @Column({
    nullable: false,
    name: "user_id",
  })
  userId: number;
}
