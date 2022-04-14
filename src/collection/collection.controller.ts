import { Controller, Get, Param } from '@nestjs/common';
import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
    constructor(private collectionService: CollectionService){}

    @Get("/slug/:slug")
    getBySlug(@Param("slug") slug: String){
        return this.collectionService.getBySlug(slug)
    }
}
