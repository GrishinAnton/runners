import { DistanceModel } from '@prisma/client';
import { Distance } from './distance.entity';

export interface IDIstanceRepository {
	createDistance: (distance: Distance) => Promise<DistanceModel>;
}
