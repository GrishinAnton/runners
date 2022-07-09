import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';
import { GreeterModule } from './birthdayBot/birthday.module';
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
        include: [GreeterModule],
      })
      
    }),
    GreeterModule
  ],
})
export class AppModule {}

