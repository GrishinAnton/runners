import { DistanceModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../types';
import { Distance } from './distance.entity';
import 'reflect-metadata';
import { IDistanceByStageId } from './distance.repository.interface';

@injectable()
export class DistanceRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async create({ time, date, distance, temp, userId, stageId }: Distance): Promise<DistanceModel> {
		return await this.prismaService.client.distanceModel.create({
			data: {
				time,
				date,
				distance,
				temp,
				userId,
				stageId,
			},
		});
	}

	async getByStageId(stageId: number): Promise<IDistanceByStageId[] | null> {
		return await this.prismaService.client.distanceModel.findMany({
			where: {
				stageId,
			},
			select: {
				id: true,
				time: true,
				date: true,
				distance: true,
				temp: true,
				user: true,
			},
			orderBy: {
				time: 'asc',
			},
		});
	}
}
