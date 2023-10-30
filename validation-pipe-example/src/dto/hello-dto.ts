import { Transform } from 'class-transformer';
import { IsInt } from 'class-validator';

export class HelloDto {
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  page: number;
}
