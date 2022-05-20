import { NextFunction, Request, Response } from 'express';

export interface ICompetitionController {
	create: (req: Request, res: Response, next: NextFunction) => void;
}
