import { NextFunction, Request, Response } from 'express';

export interface IStageController {
	createStage: (req: Request, res: Response, next: NextFunction) => void;
	getStages: (req: Request, res: Response, next: NextFunction) => void;
	getStageById: (req: Request, res: Response, next: NextFunction) => void;
}
