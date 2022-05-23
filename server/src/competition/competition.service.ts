import { CompetitionModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { Competition } from './competition.entity';
import { ICompetitionService } from './competition.service.interface';
import { CompetitionCreateDto } from './dto/competition-create.dto';
import 'reflect-metadata';
import { ICompetitionRepository } from './competition.repository.interface';

@injectable()
export class CompetitionService implements ICompetitionService {
	constructor(
		@inject(TYPES.CompetitionRepository) private competitionRepository: ICompetitionRepository,
	) {}

	async createCompetition({ name }: CompetitionCreateDto): Promise<CompetitionModel | null> {
		const competition = new Competition(name);

		const existedCompetition = await this.competitionRepository.findBy(competition);

		if (existedCompetition) {
			return null;
		}

		return this.competitionRepository.create(competition);
	}

	async getCompetition(): Promise<CompetitionModel[] | null> {
		return await this.competitionRepository.get();
	}
}
