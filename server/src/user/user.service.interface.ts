import { UserModel } from '@prisma/client';
import { UserCreateDto } from './dto/user-create.dto';

export interface IUserService {
	createUser: (dto: UserCreateDto) => Promise<UserModel | null>;
	getUser: (dto: UserCreateDto) => Promise<UserModel | null>;
	getUsers: () => Promise<UserModel[] | null>;
}
