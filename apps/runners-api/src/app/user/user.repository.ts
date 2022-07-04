import { UserModel, Prisma } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../../types';
import 'reflect-metadata';
import { IUserRepository, IUserSort } from './user.repositoty.interface';
import { User } from './user.entity';

@injectable()
export class UserRepository implements IUserRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}
	// async create({ name, surname, birthday, gender }: User): Promise<UserModel> {
	// 	return await this.prismaService.client.userModel.create({
	// 		data: {
	// 			name,
	// 			surname,
	// 			birthday,
	// 			gender,
	// 		},
	// 	});
	// }

	async findOrCreate({ name, surname, birthday, gender }: User): Promise<UserModel> {
		return await this.prismaService.client.userModel.upsert({
			where: { name_surname_birthday: { name, surname, birthday } },
			update: {},
			create: { name, surname, birthday, gender },
		});
	}

	async findBy({ userId }: { userId?: number }): Promise<UserModel | null> {
		return await this.prismaService.client.userModel.findFirst({
			where: {
				id: userId,
			},
		});
	}

	async get({
		surnameSort,
		birthdaySort,
		genderSort,
		searchValue,
	}: IUserSort): Promise<UserModel[] | null> {
		return await this.prismaService.client.userModel.findMany({
			where: {
				surname: {
					contains: searchValue,
				},
			},
			orderBy: {
				surname: surnameSort,
				birthday: birthdaySort,
				gender: genderSort,
			},
		});
	}
}
