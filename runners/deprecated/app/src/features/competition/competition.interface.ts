import { IStage } from '../stage/stage.interface';
import { IDefault } from '../types/default.interface';

export interface ICompetition extends IDefault {
	name: string;
	startDate: string;
	endDate?: string;
	stages: IStage[];
}
