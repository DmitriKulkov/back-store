import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface ProductsCreationAttrs {
  name: string;
  price: number;
  main_img: string;
  collection_id?: number;
  description?: string;
  publishedAt?: Date;
  discount?: number;
  startsAt?: Date;
  endsAt?: Date;
}

@Table({ tableName: "products" })
export class Product extends Model<Product, ProductsCreationAttrs> {
  @ApiProperty({ example: "1", description: "unique id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "1", description: "unique collection id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  collectionId: number;

  @ApiProperty({ example: "From da hood T-shirt", description: "product name" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: "neznayou", description: "unique " })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @ApiProperty({ example: 3000, description: "price" })
  @Column({ type: DataType.DOUBLE, allowNull: false })
  price: number;

  @ApiProperty({
    example:
      "This t-shirt started from da bottom. only ... wear these rare items",
    description: "description",
  })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  // make time stamps!!!!
  @ApiProperty({ example: "2/1/22", description: "drop start date" })
  @Column({ type: DataType.DATE, allowNull: true })
  publishedAt: Date;

  @ApiProperty({ example: 1000, description: "discount" })
  @Column({ type: DataType.DOUBLE, allowNull: true })
  discount: number;

  @ApiProperty({ example: "21/22", description: "discount start date" })
  @Column({ type: DataType.DATE, allowNull: true })
  startsAt: Date;

  @ApiProperty({ example: "4/1/22", description: "discount end date" })
  @Column({ type: DataType.DATE, allowNull: true })
  endsAt: Date;

  @ApiProperty({ example: "img", description: "title image" })
  @Column({ type: DataType.DATE, allowNull: true })
  mainImg: string;
}
