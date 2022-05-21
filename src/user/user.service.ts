import { CompetitionModel, UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../types';
import 'reflect-metadata';
import { UserCreateDto } from './dto/user-create.dto';
import { User } from './user.entity';
import { IUserService } from './user.service.interface';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async createUser({ name, surname, birthday }: UserCreateDto): Promise<UserModel | null> {
		const user = new User(name, surname, birthday);

		const existedCompetition = await this.prismaService.client.userModel.findFirst({
			where: {
				name: user.name,
				surname: user.surname,
				birthday: user.birthday,
			},
		});

		if (existedCompetition) {
			return null;
		}

		return this.prismaService.client.userModel.create({
			data: {
				name: user.name,
				surname: user.surname,
				birthday: user.birthday,
			},
		});
	}

	async getUser({ name, surname, birthday }: UserCreateDto): Promise<UserModel | null> {
		const user = new User(name, surname, birthday);
		return await this.prismaService.client.userModel.findUnique({
			where: {
				name_surname_birthday: {
					name: user.name,
					surname: user.surname,
					birthday: user.birthday,
				},
			},
		});
	}

	async getUsers(): Promise<UserModel[] | null> {
		return await this.prismaService.client.userModel.findMany();
	}
}
