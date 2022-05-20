import { StageModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../types';
import { Stage } from './stage.entity';
import { IStageRepository } from './stage.repository.interface';
import 'reflect-metadata';

@injectable()
export class StageRepository implements IStageRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async create({ name, date }: Stage): Promise<StageModel> {
		const competitionId = 1;
		return await this.prismaService.client.stageModel.create({
			data: {
				name,
				date,
				competitionId,
			},
		});
	}
}
