/*
 * @Description:
 * @Version: 1.0
 * @Author: WangDianWu
 * @Date: 2024-03-08 15:53:25
 * @LastEditors: WangDianWu
 * @LastEditTime: 2024-03-12 09:45:29
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSource } from './data-source';

require("reflect-metadata")

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
// getDataSource();
