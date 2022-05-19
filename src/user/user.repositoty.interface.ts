import { UserModel } from '@prisma/client';
import { IUser } from '../fileReader/StageOneHalf';

export interface IUserRepository {
	create: ({ name, surname, birthday }: IUser) => Promise<UserModel>;
	find: ({ name, surname }: Omit<IUser, 'birthday'>) => Promise<UserModel | null>;
}
