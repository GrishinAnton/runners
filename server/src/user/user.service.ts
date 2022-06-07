import { UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import 'reflect-metadata';
import { UserCreateDto } from './dto/user-create.dto';
import { User } from './user.entity';
import { IUserService } from './user.service.interface';
import { IUserRepository, IUserSort } from './user.repositoty.interface';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository) {}

	// async createUser({ name, surname, birthday, gender }: UserCreateDto): Promise<UserModel | null> {
	// 	const user = new User(name, surname, birthday, gender);

	// 	const existedCompetition = await this.userRepository.findBy(user);

	// 	if (existedCompetition) {
	// 		return null;
	// 	}

	// 	return this.userRepository.create(user);
	// }

	async findOrCreateUser({ name, surname, birthday, gender }: UserCreateDto): Promise<UserModel> {
		const user = new User(name, surname, birthday, gender);

		return this.userRepository.findOrCreate(user);
	}

	async getUser({ id }: { id?: number }): Promise<UserModel | null> {
		return await this.userRepository.findBy({ id });
	}

	async getUsers({
		surnameSort,
		birthdaySort,
		genderSort,
		searchValue,
	}: IUserSort): Promise<UserModel[] | null> {
		return await this.userRepository.get({ surnameSort, birthdaySort, genderSort, searchValue });
	}
}
