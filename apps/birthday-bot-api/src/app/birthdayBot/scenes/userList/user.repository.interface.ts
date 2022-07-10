import { UserListModel } from '@prisma/birthday-api'

export type TElementsWithCount<K> = {count: number, elements: K} 

export interface IUserRepository {
	getUsers: (skip: number) => Promise<TElementsWithCount<UserListModel[]>>;
}
