import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd(), '.env'),
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '.././storage'),
      renderPath: 'storage',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
