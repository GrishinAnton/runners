import { StageModel } from '@prisma/client';
import { StageCreateDto } from './dto/stage-create.dto';

export interface IStageService {
	create: (dto: StageCreateDto) => Promise<StageModel | null>;
}
