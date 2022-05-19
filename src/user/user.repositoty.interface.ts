import { UserModel } from '@prisma/client';
import { User } from './user.entity';

export interface IUserRepository {
	create: ({ name, surname, birthday }: User) => Promise<UserModel>;
	find: ({ name, surname }: Omit<User, 'birthday'>) => Promise<UserModel | null>;
}
