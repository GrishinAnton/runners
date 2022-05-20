import { StageModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../types';
import 'reflect-metadata';
import { StageCreateDto } from './dto/stage-create.dto';
import { Stage } from './stage.entity';
import { IStageService } from './stage.service.interface';

@injectable()
export class StageService implements IStageService {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async create({ name, date, competitionId }: StageCreateDto): Promise<StageModel | null> {
		const stage = new Stage(name, date);

		const existedCompetition = await this.prismaService.client.stageModel.findFirst({
			where: {
				name,
			},
		});

		if (existedCompetition) {
			return null;
		}

		return this.prismaService.client.stageModel.create({
			data: {
				name: stage.name,
				date: stage.date,
				competitionId,
			},
		});
	}
}
