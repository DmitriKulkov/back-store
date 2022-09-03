import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ModelService } from "src/model/model.service";
import {Between, ILike, In, Like, Repository} from "typeorm";
import { Response } from "express";

import { Product } from "./product.entity";
import {ColorService} from "../color/color.service";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
    private modelService: ModelService,
    private colorService: ColorService
  ) {}

  async getAll(que:{
    _limit?: number,//
    _page?: number,//
    _search?: string,
    _sortPrice?: -1 | 1,//
    _priceFloor?: number,//
    _priceTop?: number,//
    _collection?: string,//
    _cColors?: string[],
    _category?: string,
    _globCat?: string
               },
               res: Response) {
    // this.productsRepo.query('SELECT count(*) FROM products').then(function (num) {
    //   res.set({ 'x-total-count': num[0].count });
    // });
    const colors = que._cColors && que._cColors !== []? que._cColors: (await this.colorService.getAll()).map((color)=>color.name);
    const limit = que._limit?que._limit:100;
    const page = que._page?que._page:0;
    const search = que._search?que._search:"";
    const order = que._sortPrice != 1?'DESC':'ASC';
    const priceFloor = que._priceFloor?que._priceFloor:0;
    const priceTop = que._priceTop?que._priceTop:10000;
    const collection = que._collection?que._collection:"";
    const category = que._category?que._category:"";
    const globCat = que._globCat?que._globCat:"";
    const products = await this.productsRepo.find({
      relations: ['discount', 'model', 'model.collection', 'files', 'color', 'model.category'],
      where: {
        price: Between(priceFloor, priceTop),
        model: {
          collection: {slug: Like('%' + collection + '%')},
          name: ILike('%' + search + '%'),
          category: {
            name: Like('%' + category + '%'),
          }
        },
        // color: {name: In(colors)}
      },
      order: {price: order},
      // take: limit,
      // skip: page * limit,
    });

    const globFilter = (globCat && globCat != "")?products.filter(product=>product.model.category.globCat == globCat):products
    const colorFilter = globFilter.filter(product=>product.color.filter(c => colors.includes(c.name)).length != 0)
    res.set({ 'x-total-count': colorFilter.length });
    const result = colorFilter.slice(page * limit, page * limit + limit * 1)
    return result
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
      throw new HttpException("product not found", HttpStatus.NOT_FOUND);
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

  async getByCollection(collection: string, que){ // TODO: replace model service with typeorm
    const model = this.modelService.getByCollection(collection)
    const p = this.productsRepo.find({
      where: {model}, 
      relations: ["discount", "model", "color", "files"],
      take: que._limit,
      skip: que._page * que._limit 
    })

    return p
  }

  async getBySlug(slug: string){
    const p = await this.productsRepo.findOne({
      relations: ['discount', 'model', 'model.collection', 'color', 'files', 'model.category'],
      where: {
        model:{
          slug: slug
        }
      }
    })
    return p
  }
}
