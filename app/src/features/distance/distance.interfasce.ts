import { IUser } from '../user/user.interface';

export interface IDistanceByStageId {
	id: number;
	time: string;
	date: Date;
	distance: number;
	temp: string;
	user: IUser;
}
