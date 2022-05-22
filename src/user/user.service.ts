import { UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import 'reflect-metadata';
import { UserCreateDto } from './dto/user-create.dto';
import { User } from './user.entity';
import { IUserService } from './user.service.interface';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.UserRepository) private userService: IUserService) {}

	async createUser({ name, surname, birthday }: UserCreateDto): Promise<UserModel | null> {
		const user = new User(name, surname, birthday);

		const existedCompetition = await this.userService.getUser(user);

		if (existedCompetition) {
			return null;
		}

		return this.userService.createUser(user);
	}

	async getUser({ name, surname, birthday }: UserCreateDto): Promise<UserModel | null> {
		const user = new User(name, surname, birthday);
		return await this.userService.getUser(user);
	}

	async getUsers(): Promise<UserModel[] | null> {
		return await this.userService.getUsers();
	}
}
