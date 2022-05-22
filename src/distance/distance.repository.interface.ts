import { DistanceModel } from '@prisma/client';
import { Distance } from './distance.entity';

export interface IDistanceRepository {
	create: (distance: Distance) => Promise<DistanceModel>;
	get: () => Promise<DistanceModel[]>;
}
