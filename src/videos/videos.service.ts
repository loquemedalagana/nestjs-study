import { Injectable } from '@nestjs/common';
import { Video } from "./entities/video.entity";

@Injectable()
export class VideosService {
  private videos: Video[] = [];
  getAll(): Video[] { // query
    return this.videos;
  }

  getOne(id: string): Video {
    return this.videos.find(video => video.id === parseInt(id)); // +id도 가능
  }

  deleteOne(id: string): boolean {
    this.videos.filter(video => video.id !== +id);
    return true;
  }

  create(videoData) {
    this.videos.push({
      id: this.videos.length + 1,
      ...videoData,
    })
  }
}
