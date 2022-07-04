import { ICompetitionStatistic, IUserStatistic } from './statistic.repository.interface';

export interface IStatisticService {
	getCompetitionStatistic: (competitionId: number) => Promise<ICompetitionStatistic>;
	getUserStatistic: (userId: number) => Promise<IUserStatistic[]>;
}
