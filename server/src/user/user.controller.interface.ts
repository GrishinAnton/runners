import { NextFunction, Request, Response } from 'express';

export interface IUserController {
	// createUser: (req: Request, res: Response, next: NextFunction) => void;
	getUser: (req: Request, res: Response, next: NextFunction) => void;
	getUsers: (req: Request, res: Response, next: NextFunction) => void;
}
