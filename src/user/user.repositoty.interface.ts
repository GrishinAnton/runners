import { UserModel } from '@prisma/client';
import { User } from './user.entity';

export interface IUserRepository {
	createUser: ({ name, surname, birthday }: User) => Promise<UserModel>;
	findUser: ({ name, surname }: Omit<User, 'birthday'>) => Promise<UserModel | null>;
}
