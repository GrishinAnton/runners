import { IUser } from '../user/user.interface';

export interface IDistanceByStageId {
	id: number;
	time: number;
	date: Date;
	distance: number;
	temp: number;
	user: IUser;
}
