import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
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


});
