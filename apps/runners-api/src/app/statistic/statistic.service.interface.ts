import {ICompetitionStatistic, IUserStatistic} from '@runners/shared/interfaces'

export interface IStatisticService {
	getCompetitionStatistic: (competitionId: number) => Promise<ICompetitionStatistic>;
	getUserStatistic: (userId: number) => Promise<IUserStatistic[]>;
}
