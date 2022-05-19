import { StageModel } from '@prisma/client';
import { Stage } from './stage.entity';

export interface IStageRepository {
	create: (stage: Stage) => Promise<StageModel>;
}
