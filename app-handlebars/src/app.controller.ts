import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { fromZonedTime, toDate } from 'date-fns-tz';

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
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log('タイムゾーン:', timezone);

    const now = new Date();
    console.log('現在日時.new Date()', now);
    const message = `選択された日時: ${dto.datetime}`;

    console.log('リクエストされた日時の文字列.dto.datetime', dto.datetime);

    const requestedDateTime = new Date(dto.datetime);
    console.log(
      'リクエストされた日時の文字列をそのままnew Date()',
      requestedDateTime,
    );

    const parsedDate = toDate(dto.datetime, { timeZone: 'Asia/Tokyo' });
    console.log('date-fns-tz/toDate', parsedDate);

    return { message };
  }
}
