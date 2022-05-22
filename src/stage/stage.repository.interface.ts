import { StageModel } from '@prisma/client';
import { Stage } from './stage.entity';

export interface IStageRepository {
	create: (stage: Stage) => Promise<StageModel>;
	findBy: (stage: Stage) => Promise<StageModel | null>;
	get: () => Promise<StageModel[] | null>;
}
