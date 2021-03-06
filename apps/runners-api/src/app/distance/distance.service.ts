import { DistanceModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';
import 'reflect-metadata';
import { IDistanceByStageId, IDistanceRepository } from './distance.repository.interface';
import { DistanceCreateDto } from './dto/distance-create.dto';
import { Distance } from './distance.entity';
import { IDistanceService } from './distance.service.interface';

@injectable()
export class DistanceService implements IDistanceService {
	constructor(@inject(TYPES.DistanceRepository) private distanceRepository: IDistanceRepository) {}

	async createDistance({
		time,
		date,
		distance,
		userId,
		stageId,
	}: DistanceCreateDto): Promise<DistanceModel> {
		const distanceEntity = new Distance(time, date, distance, userId, stageId);
		return this.distanceRepository.create(distanceEntity);
	}

	async getDistance(stageId: string): Promise<IDistanceByStageId[] | null> {
		return await this.distanceRepository.getByStageId(Number(stageId));
	}
}
