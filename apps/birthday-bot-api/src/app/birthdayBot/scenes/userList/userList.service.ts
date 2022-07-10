import { Injectable } from '@nestjs/common';
import { IUserService } from './user.service.interface';
import { UserRepository } from './userList.repository';

@Injectable()
export class UserService implements IUserService {

    constructor(private readonly userRepository: UserRepository) {}

    async getUsers(skip: number) {
        return await this.userRepository.getUsers(skip)
    }
}
