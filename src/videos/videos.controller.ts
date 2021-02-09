import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

@Controller('videos')
export class VideosController {
  @Get()
  getAll() {
    return "we will return all videos";
  }

  // search를 id로 인식한다. (express랑 같은 문제)
  @Get("search")
  search(){
    return `we are searching... with a title`;
  }
  @Get('/:id')
  getOne(@Param("id") videoId: string) {
    return `this will return one video${videoId}`;
  }

  // 새 영상은 get요청을 먼저 보내고 response를 받았을 때 여기로 요청 보낸다.
  @Post()
  create(@Body() videoData) {
    return videoData;
  }

  @Delete("/:id")
  remove(@Param("id") videoId: string) {
    return `This will delete a video ${videoId}`;
  }

  @Patch("/:id")
  patch(@Param("id") videoId: string, @Body() updateData) {
    return {
      updatedVideo: videoId,
      ...updateData,
    };
  }

}
