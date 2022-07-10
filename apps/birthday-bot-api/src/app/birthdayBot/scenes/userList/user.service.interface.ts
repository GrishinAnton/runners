import { UserListModel } from '@prisma/birthday-api'
import { TElementsWithCount } from './user.repository.interface';

export interface IUserService {
	getUsers: (skip: number) => Promise<TElementsWithCount<UserListModel[]>>;
}
