import { NextFunction, Request, Response } from 'express';

export interface ICompetitionController {
	createCompetition: (req: Request, res: Response, next: NextFunction) => void;
	getCompetition: (req: Request, res: Response, next: NextFunction) => void;
}
