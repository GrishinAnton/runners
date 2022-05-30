import { UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../types';
import 'reflect-metadata';
import { IUserRepository } from './user.repositoty.interface';
import { User } from './user.entity';

@injectable()
export class UserRepository implements IUserRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}
	async create({ name, surname, birthday, gender }: User): Promise<UserModel> {
		return await this.prismaService.client.userModel.create({
			data: {
				name,
				surname,
				birthday,
				gender,
			},
		});
	}

	async findOrCreate({ name, surname, birthday, gender }: User): Promise<UserModel> {
		return await this.prismaService.client.userModel.upsert({
			where: { name_surname_birthday: { name, surname, birthday } },
			update: {},
			create: { name, surname, birthday, gender },
		});
	}

	async findBy({ name, surname, birthday }: User): Promise<UserModel | null> {
		return await this.prismaService.client.userModel.findFirst({
			where: {
				name,
				surname,
				birthday,
			},
		});
	}

	async get(): Promise<UserModel[] | null> {
		return await this.prismaService.client.userModel.findMany({
			include: {
				distance: true,
			},
		});
	}
}
