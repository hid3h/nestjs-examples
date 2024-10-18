import { Body, Controller, Get, Post, Render } from '@nestjs/common';

class DateTimeDto {
  datetime: string;
}

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getHello() {
    const message = `あいうえお\n改行されました`;
    return { message };
  }
  @Post('submit')
  @Render('index')
  postDateTime(@Body() dto: DateTimeDto) {
    const message = `選択された日時: ${dto.datetime}`;
    return { message };
  }
}
