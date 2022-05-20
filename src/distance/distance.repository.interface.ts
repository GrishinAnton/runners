import { DistanceModel } from '@prisma/client';
import { Distance } from './distance.entity';

export interface IDIstanceRepository {
	create: (distance: Distance) => Promise<DistanceModel>;
}
