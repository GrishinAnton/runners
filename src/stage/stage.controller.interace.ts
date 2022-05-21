import { NextFunction, Request, Response } from 'express';

export interface IStageController {
	createStage: (req: Request, res: Response, next: NextFunction) => void;
	getStage: (req: Request, res: Response, next: NextFunction) => void;
}
