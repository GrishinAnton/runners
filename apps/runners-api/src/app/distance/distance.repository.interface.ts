import { DistanceModel, UserModel } from '@prisma/client';
import { Distance } from './distance.entity';

export interface IDistanceRepository {
	create: (distance: Distance) => Promise<DistanceModel>;
	getByStageId: (stageId: number) => Promise<IDistanceByStageId[] | null>;
}

export interface IDistanceByStageId {
	id: number;
	time: number;
	date: Date;
	distance: number;
	temp: number;
	user: UserModel;
}
