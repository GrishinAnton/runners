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
	async createUser({ name, surname, birthday }: User): Promise<UserModel> {
		return await this.prismaService.client.userModel.create({
			data: {
				name,
				surname,
				birthday,
			},
		});
	}

	async findUser({ name, surname }: Omit<User, 'birthday'>): Promise<UserModel | null> {
		return await this.prismaService.client.userModel.findFirst({
			where: {
				name,
				surname,
			},
		});
	}
}
