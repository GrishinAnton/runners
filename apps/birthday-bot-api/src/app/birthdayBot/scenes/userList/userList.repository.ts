import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { UserListModel } from '@prisma/birthday-api'

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async getUsers(): Promise<UserListModel[] | null> {
        // await this.prismaService.userListModel.createMany({
        //     data: [
        //         {
        //             name: 'Anton',
        //             surname: 'Grishin',
        //             birthday: '2022-07-10T04:22:13.069Z'
        //         }
        //     ]
        // })
        return await this.prismaService.userListModel.findMany({})
    }
}