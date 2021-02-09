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

  // first test
  it("should be 4", () => {
    expect(2+3).toEqual(5);
  })
});
