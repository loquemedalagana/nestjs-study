import { Test, TestingModule } from '@nestjs/testing';
import {INestApplication, ValidationPipe} from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  // beforeAll vs beforeEach
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 실제 타입으로 변환해준다.
    }))

    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('hola, mi video api!');
  });

  describe("/videos", () => {
    it("GET", () => {
      return request(app.getHttpServer())
        .get('/videos')
        .expect(200)
        .expect([]);
    })
    it("POST", () => {
      return request(app.getHttpServer())
        .post('/videos')
        .send({
          title: "Test Video",
          tags: ["test"],
          year: 1999,
        })
        .expect(201);
    })
    it("DELETE", () => {
      return request(app.getHttpServer())
        .delete('/videos')
        .expect(404);
    })
  })

  describe("/videos/:id", () => {
    it("GET 200", () => {
      return request(app.getHttpServer())
        .get("/videos/1")
        .expect(200);
    });
    it("GET 404", () => {
      return request(app.getHttpServer())
        .get("/videos/999")
        .expect(404);
    });
    it.todo("DELETE");
    it.todo("PATCH");
  })
});
