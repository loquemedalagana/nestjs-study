import { Module } from '@nestjs/common';
import { VideosController } from './videos/videosController';

@Module({
  imports: [],
  controllers: [VideosController],
  providers: [],
})
export class AppModule {}
