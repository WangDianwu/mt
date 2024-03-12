/*
 * @Description:
 * @Version: 1.0
 * @Author: WangDianWu
 * @Date: 2024-03-08 15:53:25
 * @LastEditors: WangDianWu
 * @LastEditTime: 2024-03-12 09:54:34
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getHello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('getHello1')
  getHello1(): string[] {
    const data = [
      '银鳞胸甲',
      '五金一件',
      '重返诺森德',
      '人见人爱花见花开',
      '奶爸神棍德',
      '战士哀木涕',
      'MT666',
      '啵啵专属',
      '啵啵福利',
      '闪闪发光',
    ];
    return data;
  }
}
