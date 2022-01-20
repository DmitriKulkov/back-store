import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CollectionController } from "./collection.controller";
import { CollectionService } from "./collection.service";
import { Collection } from "./collection.entity";

@Module({
  controllers: [CollectionController],
  providers: [CollectionService],
})
export class CollectionModule {}
