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
      exceptionFactory: (e) => {
        return new BadRequestException(e);
      },
    }),
  )
  postHello(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    return this.appService.getHello();
  }
}
