import {Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

@Controller('videos')
export class VideosController {
  @Get()
  getAll() {
    return "we will return all videos";
  }

  @Get('/:id')
  getOne(@Param("id") videoId: string) {
    return `this will return one video${videoId}`;
  }

  @Post()
  create() {
    return "This will create a video";
  }

  @Delete("/:id")
  remove(@Param("id") videoId: string) {
    return `This will delete a video ${videoId}`;
  }

  @Patch("/:id")
  patch(@Param("id") videoId: string) {
    return `This will update a video ${videoId}`;
  }
}
