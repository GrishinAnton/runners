import { CompetitionModel } from '@prisma/client';
import { CompetitionCreateDto } from './dto/competition-create.dto';

export interface ICompetitionService {
	create: (dto: CompetitionCreateDto) => Promise<CompetitionModel | null>;
}
