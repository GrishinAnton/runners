import { CompetitionModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../types';
import { Competition } from './competition.entity';
import { ICompetitionService } from './competition.service.interface';
import { CompetitionCreateDto } from './dto/competition-create.dto';
import 'reflect-metadata';

@injectable()
export class CompetitionService implements ICompetitionService {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async create({ name }: CompetitionCreateDto): Promise<CompetitionModel | null> {
		const competition = new Competition(name);

		const existedCompetition = await this.prismaService.client.competitionModel.findFirst({
			where: {
				name,
			},
		});

		if (existedCompetition) {
			return null;
		}

		return this.prismaService.client.competitionModel.create({
			data: {
				name: competition.name,
			},
		});
	}
}
