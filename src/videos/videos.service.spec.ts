import { Test, TestingModule } from '@nestjs/testing';
import { VideosService } from './videos.service';
import {NotFoundException} from "@nestjs/common";

describe('VideosService', () => {
  let service: VideosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideosService],
    }).compile();

    service = module.get<VideosService>(VideosService);
  });

  // individual test
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // 테스트 메소드들
  describe("getAll", () => {
    it("should return an array", () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  })

  describe("getOne", () => {
    it("should return a video", () => {
      service.create({ // dummy data
        title: "Test Video",
        tags: ["test"],
        year: 1999,
      });

      const video = service.getOne(1);
      expect(video).toBeDefined();
      expect(video.id).toEqual(1);
    })

    // another case - NotFoundException
    it("should throw 404 error", () => {
      try {
        service.getOne(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual("video id 999 not found"); // service메시지랑 같아야함
      }
    })
  })

  // delete
  describe("deleteOne", () => {
    it("deletes a video", () => {
      service.create({ // dummy data
        title: "Test Video",
        tags: ["test"],
        year: 1999,
      });
      const allVideos = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toEqual(allVideos - 1);
    })

    it("should throw 404 error", () => {
      try {
        service.deleteOne(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual("video id 999 not found"); // service메시지랑 같아야함
      }
    })
  })

  // create
  describe("create", () => {
    it("should create a video", () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: "Test Video",
        tags: ["test"],
        year: 1999,
      })
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    })
  })
});
