import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({
    credentials: true,
    origin: [configService.get<string>('API_CLIENT')],
  });

  const port = configService.get<number>('PORT', 7001);

  await app.listen(port, () => {
    Logger.log(`Application started on http://localhost:${port}`, 'Main');
  });
}
bootstrap();
