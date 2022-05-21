import { inject, injectable } from 'inversify';
import { ICompetitionRepository } from './competition.repository.interface';
import 'reflect-metadata';
import { TYPES } from '../types';
import { PrismaService } from '../database/prisma.service';
import { CompetitionModel } from '@prisma/client';
import { Competition } from './competition.entity';

@injectable()
export class CompetitionRepository implements ICompetitionRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async createCompetition({ name }: Competition): Promise<CompetitionModel> {
		return await this.prismaService.client.competitionModel.create({
			data: {
				name,
			},
		});
	}
}
