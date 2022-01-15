import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/user.entity";
import { JoinColumn } from "typeorm";
import { OneToOne } from "typeorm";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "carts" })
export class Cart {
  @ApiProperty({ example: "1", description: "Unique Id" })
  @PrimaryGeneratedColumn()
  id: number;

  // @ApiProperty({ example: "1", description: "User Id" })
  // @Column({
  //   nullable: false,
  //   name: "user_id",
  // })
  // userId: number;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
}
