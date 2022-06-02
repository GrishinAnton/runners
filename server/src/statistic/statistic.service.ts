import { CompetitionModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { IStatisticService } from './statistic.service.interface';
import 'reflect-metadata';
import { IStatisticRepository } from './statistic.repository.interface';
import { ICompetitionStatistic } from './statistic.repository';

@injectable()
export class StatisticService implements IStatisticService {
	constructor(
		@inject(TYPES.StatisticRepository) private statisticRepository: IStatisticRepository,
	) {}

	async getCompetitionStatistic(competitionId: number): Promise<ICompetitionStatistic> {
		return await this.statisticRepository.getCompetitionStatistic(competitionId);
	}
}

// Кол-во этапов - competition -> stages -> count
// Кол-во участников - competition -> stages -> distance -> users@uniq -> count
// Всего М - Всего Ж - competition -> stages -> distance -> users@uniq -> countBy gender

// Возраст от - до - competition -> stages -> distance -> users@uniq -> aggregate min - max

// Время от - до - competition -> stages -> distance -> aggregate min - max
// Темп от - до - competition -> stages -> distance -> aggregate min - max

// Все участники пробежали за все этапы: competition -> stages -> distance -> aggregate summ
// Самый быстрый: competition -> stages -> distance -> min -> user
// - Самый красивый - (голосование)
