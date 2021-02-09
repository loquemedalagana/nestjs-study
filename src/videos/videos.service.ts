import {Injectable, NotFoundException} from '@nestjs/common';
import { Video } from "./entities/video.entity";
import {CreateVideoDto} from "./dto/create-video.dto";
import {UpdateVideoDto} from "./dto/update-movie.dto";

@Injectable()
export class VideosService {
  private videos: Video[] = [];
  getAll(): Video[] { // query
    return this.videos;
  }

  getOne(id: number): Video {
    const video = this.videos.find(video => video.id === id); // +id도 가능
    console.log(typeof id);
    if(!video) {
      throw new NotFoundException(`video id ${id} not found`);
    }
    return video;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.videos = this.videos.filter(video => video.id !== id);
  }

  create(videoData: CreateVideoDto) {
    this.videos.push({
      id: this.videos.length + 1,
      ...videoData,
    })
  }

  update(id: number, updateData: UpdateVideoDto) {
    const video = this.getOne(id);
    this.deleteOne(id);
    this.videos.push({
      ...video,
      ...updateData,
    })
  }
}
