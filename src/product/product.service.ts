import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ModelService } from "src/model/model.service";
import { Repository } from "typeorm";
import { Request, query } from "express";

import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
    private modelService: ModelService
  ) {}

  async getAll() {
    const products = await this.productsRepo.find({
      relations: ["discount", "model", "color", "files"],
    });
    return products;
  }

  async getAllReleased() {
    const products = await this.productsRepo.find({
      select: ["id", "price"],
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

  async getByCollection(collection: String, que){
    const model = this.modelService.getByCollection(collection)
    const p = this.productsRepo.find({
      where: {model}, 
      relations: ["discount", "model", "color", "files"],
      take: que._limit,
      skip: que._page * que._limit 
    })

    return p
  }
}
