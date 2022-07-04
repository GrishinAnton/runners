import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';
import { EchoUpdate } from './echo/echo.update';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_TOKEN,
      include: [EchoUpdate],
    }),
    EchoUpdate
  ],
  providers: [],
})
export class AppModule {}

