import { CompetitionModel } from '@prisma/client';
import { Competition } from './competition.entity';

export interface ICompetitionRepository {
	create: (competition: Competition) => Promise<CompetitionModel>;
	findBy: (competition: Competition) => Promise<CompetitionModel | null>;
	get: () => Promise<CompetitionModel[]>;
}
