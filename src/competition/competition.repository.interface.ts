import { CompetitionModel } from '@prisma/client';
import { Competition } from './competition.entity';

export interface ICompetitionRepository {
	createCompetition: (competition: Competition) => Promise<CompetitionModel>;
}
