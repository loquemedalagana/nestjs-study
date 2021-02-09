import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {VideosService} from "./videos.service";
import {Video} from "./entities/video.entity";

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  getAll(): Video[] {
    return this.videosService.getAll();
  }

  // search를 id로 인식한다. (express랑 같은 문제)
  @Get("search")
  search(@Query('year') searchingYear: string){
    return `we are searching... with a video made after ${searchingYear}`;
  }
  @Get(':id')
  getOne(@Param("id") videoId: string): Video {
    return this.videosService.getOne(videoId);
  }

  // 새 영상은 get요청을 먼저 보내고 response를 받았을 때 여기로 요청 보낸다.
  @Post()
  create(@Body() videoData) {
    return this.videosService.create(videoData);
  }

  @Delete(":id")
  remove(@Param("id") videoId: string) {
    return this.videosService.deleteOne(videoId);
  }

  @Patch(":id")
  patch(@Param("id") videoId: string, @Body() updateData) {
    return this.videosService.update(videoId, updateData);
  }

}
