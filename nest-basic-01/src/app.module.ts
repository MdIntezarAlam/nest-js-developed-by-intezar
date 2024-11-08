import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/users.module';
import { TweetModule } from './tweet/tweet.module';
import { TicketsModule } from './tickets/tickets.module';
import { AddressModule } from './address/address.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TweetModule, TicketsModule, AddressModule, AuthModule], //import all created module
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
