import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';
import { IStatisticService } from './statistic.service.interface';
import 'reflect-metadata';
import { IStatisticRepository } from './statistic.repository.interface';
import {ICompetitionStatistic, IUserStatistic} from '@runners/shared/interfaces'

@injectable()
export class StatisticService implements IStatisticService {
	constructor(
		@inject(TYPES.StatisticRepository) private statisticRepository: IStatisticRepository,
	) {}

	async getCompetitionStatistic(competitionId: number): Promise<ICompetitionStatistic> {
		return await this.statisticRepository.getCompetitionStatistic(competitionId);
	}

	async getUserStatistic(userId: number): Promise<IUserStatistic[]> {
		return await this.statisticRepository.getUserStatistic(userId);
	}
}
