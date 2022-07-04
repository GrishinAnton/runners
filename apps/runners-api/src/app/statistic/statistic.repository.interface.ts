import {ICompetitionStatistic, IUserStatistic} from '@runners/shared/interfaces'

export interface IStatisticRepository {
	getCompetitionStatistic: (competitionId: number) => Promise<ICompetitionStatistic>;
	getUserStatistic: (userId: number) => Promise<IUserStatistic[]>;
}