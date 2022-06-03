import { ICompetitionStatistic } from './statistic.repository.interface';

export interface IStatisticService {
	getCompetitionStatistic: (competitionId: number) => Promise<ICompetitionStatistic>;
}
