import { Module } from '@nestjs/common';
import { BirthdayUpdate } from './birthday.update';
import { UserListScene } from './scenes/userList.scene';


@Module({
  providers: [BirthdayUpdate, UserListScene],
})
export class GreeterModule {}