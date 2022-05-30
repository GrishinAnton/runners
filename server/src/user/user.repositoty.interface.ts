import { UserModel } from '@prisma/client';
import { User } from './user.entity';

export interface IUserRepository {
	create: ({ name, surname, birthday }: User) => Promise<UserModel>;
	findOrCreate: ({ name, surname, birthday }: User) => Promise<UserModel>;
	findBy: ({ name, surname, birthday }: User) => Promise<UserModel | null>;
	get: () => Promise<UserModel[] | null>;
}
