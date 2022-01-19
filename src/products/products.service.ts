import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
  ) {}

  async getAll() {
    const products = await this.productsRepo.find({
      // relations: ["stocks"],
    });
    return products;
  }

  async getAllSellable() {
    const products = await this.productsRepo.find({
      select: ["id", "collection", "name", "price", "description"],
      where: {
        released: true,
      },
    });
    // и надо как-то возвращать скидку равную нулю если даты не наступили...
    //
    return products;
  }

  async getOne(id: number) {
    const product = await this.productsRepo.findOne(id);
    if (!product) {
      throw new HttpException("user not found", HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async create(dto) {
    const p = await this.productsRepo.findOne({ where: { slug: dto.slug } });
    if (p) {
      throw new HttpException(
        "product with such slug already exists",
        HttpStatus.BAD_REQUEST,
      );
    }
    const product = this.productsRepo.create(dto);
    await this.productsRepo.save(product);
    return product;
  }

  async update(dto) {
    const product = await this.productsRepo.save({ id: dto.id, ...dto });

    return product;
  }

  async delete(id: number) {
    const p = await this.productsRepo.findOne(id);
    if (!p) {
      throw new HttpException("user not found", HttpStatus.NOT_FOUND);
    }
    await this.productsRepo.delete(id);
    return p;
  }
}
