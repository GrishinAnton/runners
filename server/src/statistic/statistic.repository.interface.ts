import { ICompetitionStatistic } from './statistic.repository';

export interface IStatisticRepository {
	getCompetitionStatistic: (competitionId: number) => Promise<ICompetitionStatistic>;
}
