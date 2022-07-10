import { Module } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { UserRepository } from './userList.repository';
import { UserListScene } from './userList.scene';
import { UserService } from './userList.service';

@Module({
  providers: [PrismaService, UserService, UserListScene, UserRepository],
  exports: [UserListScene]
})
export class UserListModule {}