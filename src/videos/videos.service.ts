import {Injectable, NotFoundException} from '@nestjs/common';
import { Video } from "./entities/video.entity";

@Injectable()
export class VideosService {
  private videos: Video[] = [];
  getAll(): Video[] { // query
    return this.videos;
  }

  getOne(id: string): Video {
    const video = this.videos.find(video => video.id === parseInt(id)); // +id도 가능
    if(!video) {
      throw new NotFoundException(`video id ${id} not found`);
    }
    return video;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.videos = this.videos.filter(video => video.id !== +id);
  }

  create(videoData) {
    this.videos.push({
      id: this.videos.length + 1,
      ...videoData,
    })
  }

  update(id: string, updateData) {
    const video = this.getOne(id);
    this.deleteOne(id);
    this.videos.push({
      ...video,
      ...updateData,
    })
  }
}
