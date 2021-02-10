import { Test, TestingModule } from '@nestjs/testing';
import { VideosService } from './videos.service';

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
    })

  })
});
