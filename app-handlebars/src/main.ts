import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views', 'layouts'));

  // const originalCompile = hbs.handlebars.compile;
  // hbs.handlebars.compile = (input, options) => {
  //   const newOptions = options || {};
  //   newOptions.preventIndent = true;
  //   return originalCompile.call(this, input, newOptions);
  // };

  await app.listen(3000);
}
bootstrap();
