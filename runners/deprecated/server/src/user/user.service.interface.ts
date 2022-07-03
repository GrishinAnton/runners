import { UserModel } from '@prisma/client';
import { UserCreateDto } from './dto/user-create.dto';
import { IUserSort } from './user.repositoty.interface';

export interface IUserService {
	// createUser: (dto: UserCreateDto) => Promise<UserModel | null>;
	findOrCreateUser: (dto: UserCreateDto) => Promise<UserModel>;
	getUser: ({ userId }: { userId?: number }) => Promise<UserModel | null>;
	getUsers: ({
		surnameSort,
		birthdaySort,
		genderSort,
		searchValue,
	}: IUserSort) => Promise<UserModel[] | null>;
}
