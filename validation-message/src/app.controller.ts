import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './create-user-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      exceptionFactory: () => {
        return new BadRequestException({
          custom: 'message1',
          hoge: 'message2',
        });
      },
    }),
  )
  postHello(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    return this.appService.getHello();
  }
}
