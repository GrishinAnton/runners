import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';
import { BirthdayModule } from './birthdayBot/birthday.module';
import { sessionMiddleware } from './middleware/session.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TelegrafModule.forRootAsync({
      useFactory: () => ({
        token: process.env.TELEGRAM_TOKEN,
        middlewares: [sessionMiddleware],
        include: [BirthdayModule],
      })
      
    }),
    BirthdayModule
  ],
})
export class AppModule {}

