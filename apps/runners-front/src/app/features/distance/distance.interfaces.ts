import { UserGender } from '@prisma/client';
import { IUser } from '@runners/shared/interfaces';

export interface IDistanceByStageId {
	id: number;
	time: number;
	date: Date;
	distance: number;
	temp: number;
	user: IUser;
}

export interface IDistanceGender {
	[UserGender.MALE]: IDistanceByStageId[];
	[UserGender.FEMALE]: IDistanceByStageId[];
}
