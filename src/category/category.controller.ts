import {Controller, Get, Param} from '@nestjs/common';
import {CategoryService} from "./category.service";

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    getAll(){
        return this.categoryService.getAll()
    }

    @Get('/:globCat')
    getByGCategory(@Param("globCat") globCat: string){
        return this.categoryService.getByGCategory(globCat)
    }
}
