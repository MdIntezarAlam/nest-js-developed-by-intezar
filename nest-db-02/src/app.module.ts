import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BooksModule } from './books/books.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.local.env'] //file path
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGO_URL'),
    }),
    inject: [ConfigService],

  }),
  BooksModule

  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
