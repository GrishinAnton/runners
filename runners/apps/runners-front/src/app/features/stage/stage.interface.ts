import { IDefault } from '../types/default.interface';

export interface IStage extends IDefault {
	name: string;
	date: Date;
	competitionId: number;
}
