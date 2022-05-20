import { DistanceModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../types';
import { Distance } from './distance.entity';
import 'reflect-metadata';

@injectable()
export class DistanceRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async create({ time, date, distance, temp }: Distance): Promise<DistanceModel> {
		const userId = 1;
		return await this.prismaService.client.distanceModel.create({
			data: {
				time,
				date,
				distance,
				temp,
				userId,
			},
		});
	}
}
