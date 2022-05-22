import { NextFunction, Request, Response } from 'express';

export interface IRaceController {
	createRaceFromFile: (req: Request, res: Response, next: NextFunction) => void;
}
