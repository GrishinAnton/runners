import { CompetitionModel } from '@prisma/client';
import { CompetitionCreateDto } from './dto/competition-create.dto';

export interface ICompetitionService {
	createCompetition: (dto: CompetitionCreateDto) => Promise<CompetitionModel | null>;
	getCompetition: () => Promise<CompetitionModel[] | null>;
}
