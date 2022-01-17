import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("media")
export class MediaController {
  @Post()
  @UseInterceptors(FileInterceptor("image"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
