import { DistanceModel } from '@prisma/client';
import { DistanceCreateDto } from './dto/distance-create.dto';

export interface IDistanceService {
	createDistance: (dto: DistanceCreateDto) => Promise<DistanceModel | null>;
	getDistance: () => Promise<DistanceModel[] | null>;
}
