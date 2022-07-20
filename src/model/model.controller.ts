import { Controller, Get, Param } from '@nestjs/common';
import { ModelService } from './model.service';

@Controller('model')
export class ModelController {
    constructor(private modelService: ModelService){}

    @Get("/:collection")
    findByCollection(@Param("collection") collection: string){
        return this.modelService.getByCollection(collection);
    }

    @Get("/slug/:slug")
    findBySlug(@Param("slug") slug: string){
        return this.modelService.getBySlug(slug);
    }
}
    