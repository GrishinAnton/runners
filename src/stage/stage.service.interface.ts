import { StageModel } from '@prisma/client';
import { StageCreateDto } from './dto/stage-create.dto';

export interface IStageService {
	createStage: (dto: StageCreateDto) => Promise<StageModel | null>;
	getStage: () => Promise<StageModel[] | null>;
}
