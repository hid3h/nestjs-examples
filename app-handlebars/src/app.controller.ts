import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getHello() {
    const message = `あいうえお\n改行されました`;
    return { message };
  }
}
