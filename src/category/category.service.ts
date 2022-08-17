import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Category} from "./category.entity";
import {Repository} from "typeorm";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private categoryRepo: Repository<Category>
    ) {}

    async getAll(){
        const cat = await this.categoryRepo.find()
        return cat
    }

    async getByGCategory(globCat: string){
        const cat = await this.categoryRepo.find({
            where:{
                globCat: globCat
            }
        })
        return cat
    }
}
