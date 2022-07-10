import { Module } from '@nestjs/common';
import { BirthdayUpdate } from './birthday.update';
import { UserListModule } from './scenes/userList/userList.module';

@Module({
  imports: [UserListModule],
  providers: [BirthdayUpdate],
})
export class BirthdayModule {}