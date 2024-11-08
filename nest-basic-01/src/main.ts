import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter()); //use global exception filter
  app.useGlobalPipes(new ValidationPipe({ //use global validation pipe
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true

  }))

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
