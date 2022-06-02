import { ICompetitionStatistic } from './statistic.repository';

export interface IStatisticService {
	getCompetitionStatistic: (competitionId: number) => Promise<ICompetitionStatistic>;
}
