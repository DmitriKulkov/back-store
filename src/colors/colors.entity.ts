// import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
// import { ApiProperty } from "@nestjs/swagger";

// // interface ColorsCreationAttrs {
// //   id: number;
// //   name: string;
// //   hex: string;
// // }

// @Entity({ name: "colors" })
// export class Color {
//   @ApiProperty({ example: "1", description: "Unique Id" })
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ApiProperty({ example: "Red", description: "Color name" })
//   @Column({
//     type: "varchar",
//   })
//   name: string;

//   @ApiProperty({
//     example: "Red",
//     description: "Hexadecimal representation of the color",
//   })
//   @Column({
//     type: "varchar",
//     length: 7,
//   })
//   hex: string;
// }
