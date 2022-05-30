import { UserModel } from '@prisma/client';
import { UserCreateDto } from './dto/user-create.dto';

export interface IUserService {
	createUser: (dto: UserCreateDto) => Promise<UserModel | null>;
	findOrCreateUser: (dto: UserCreateDto) => Promise<UserModel>;
	getUser: (dto: UserCreateDto) => Promise<UserModel | null>;
	getUsers: () => Promise<UserModel[] | null>;
}
