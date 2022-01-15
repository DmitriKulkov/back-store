import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ColorsController } from "./colors.controller";
import { Color } from "./color.entity";
import { ColorsService } from "./colors.service";

@Module({
  controllers: [ColorsController],
  providers: [ColorsService],
  imports: [TypeOrmModule.forFeature([Color])],
})
export class ColorsModule {}
