import { NextFunction, Request, Response } from 'express';

export interface IStatisticController {
	getCompetitionStatistic: (req: Request, res: Response, next: NextFunction) => void;
	getUserStatistic: (req: Request, res: Response, next: NextFunction) => void;
}
