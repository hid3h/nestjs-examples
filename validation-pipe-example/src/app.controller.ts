import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { HelloDto } from './dto/hello-dto';

@Controller()
export class AppController {
  @Get()
  getHello(@Query(new ValidationPipe({ transform: true })) helloDto: HelloDto) {
    console.log('helloDto', helloDto);
    return {
      message: 'hello',
    };
  }
}
