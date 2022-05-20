import { NextFunction, Request, Response } from 'express';

export interface IStageController {
	create: (req: Request, res: Response, next: NextFunction) => void;
}
