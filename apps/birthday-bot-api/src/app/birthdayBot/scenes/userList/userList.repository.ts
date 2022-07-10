import { Injectable } from '@nestjs/common';
import { seedUsersList } from '../../../common/seed/seed';
import { PrismaService } from '../../../database/prisma.service';
import { DEFAULT_TAKE } from '../constants';
import { IUserRepository } from './user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async getUsers(skip: number) {
        // await this.prismaService.userListModel.createMany({
        //     data: seedUsersList(10)
        // })
        // await this.prismaService.userListModel.deleteMany()
        
        const userList = await this.prismaService.userListModel.findMany({
            take: DEFAULT_TAKE,
            skip: skip,
            
        })
        const count = await this.prismaService.userListModel.count()

        return {
            count,
            elements: userList
        }
    }
}