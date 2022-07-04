import { DistanceModel } from '@prisma/client';
import { IDistanceByStageId } from './distance.repository.interface';
import { DistanceCreateDto } from './dto/distance-create.dto';

export interface IDistanceService {
	createDistance: (dto: DistanceCreateDto) => Promise<DistanceModel | null>;
	getDistance: (stageId: string) => Promise<IDistanceByStageId[] | null>;
}
