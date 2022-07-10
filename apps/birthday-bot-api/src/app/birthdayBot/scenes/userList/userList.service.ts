import { Injectable } from '@nestjs/common';
import { UserListModel } from '@prisma/birthday-api'
import { UserRepository } from './userList.repository';

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) { }

    async getUsers(): Promise<UserListModel[] | null> {
        const existedUsers = await this.userRepository.getUsers()
        if(!existedUsers){
            return null
        }

        return existedUsers
    }
}
