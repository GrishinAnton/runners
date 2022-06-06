import { Prisma, UserModel } from '@prisma/client';
import { User } from './user.entity';

export interface IUserRepository {
	create: ({ name, surname, birthday }: User) => Promise<UserModel>;
	findOrCreate: ({ name, surname, birthday }: User) => Promise<UserModel>;
	findBy: ({ name, surname, birthday }: User) => Promise<UserModel | null>;
	get: ({
		surnameSort,
		birthdaySort,
		genderSort,
		searchValue,
	}: IUserSort) => Promise<UserModel[] | null>;
}

export interface IUserSort {
	surnameSort?: Prisma.SortOrder;
	birthdaySort?: Prisma.SortOrder;
	genderSort?: Prisma.SortOrder;
	searchValue?: string;
}
