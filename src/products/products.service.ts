import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./products.model";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productsRepository: typeof Product,
  ) {}

  async getAll() {
    const products = await this.productsRepository.findAll();
    return products;
  }

  async getOne(id: number) {
    const product = await this.productsRepository.findByPk(id);
    return product;
  }

  async create(dto) {
    const product = await this.productsRepository.create(dto);
    return product;
  }

  async update(dto) {
    const product = await this.productsRepository.update(dto, {
      where: { id: dto.id },
    });
    return product;
  }

  async delete(id: number) {
    const product = await this.productsRepository.destroy({
      where: { id: id },
    });
  }
}
