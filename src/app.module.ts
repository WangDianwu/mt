/*
 * @Description:
 * @Version: 1.0
 * @Author: WangDianWu
 * @Date: 2024-03-08 15:53:25
 * @LastEditors: WangDianWu
 * @LastEditTime: 2024-03-12 17:11:15
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // 静态文件目录
      serveRoot: '/public', // 访问静态文件的URL路径
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
