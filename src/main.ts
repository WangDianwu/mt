/*
 * @Description:
 * @Version: 1.0
 * @Author: WangDianWu
 * @Date: 2024-03-08 15:53:25
 * @LastEditors: WangDianWu
 * @LastEditTime: 2024-03-12 11:43:50
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { getDataSource } from './data-source';
// import * as serveStatic from 'serve-static';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

// import express from 'express';

// require("reflect-metadata")

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.use('/public', express.static(path.join(__dirname, '../public')));
  app.enableCors();
  app.useStaticAssets(join(__dirname, './', 'public'));
  // app.use(
  //   '/public',
  //   serveStatic(path.join(__dirname, '../public'), {
  //     maxAge: '1d',
  //     extensions: ['jpg', 'jpeg', 'png', 'gif'],
  //   }),
  // );
  await app.listen(3000);
}
bootstrap();
// getDataSource();
