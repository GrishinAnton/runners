import { NextFunction, Request, Response } from 'express';

export interface IDistanceController {
	createDistance: (req: Request, res: Response, next: NextFunction) => void;
	getDistance: (req: Request, res: Response, next: NextFunction) => void;
}
