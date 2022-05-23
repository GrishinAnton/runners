import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';
import { IDistanceController } from './distance.controller.interface';
import 'reflect-metadata';
import { IDistanceService } from './distance.service.interface';
import { DistanceCreateDto } from './dto/distance-create.dto';

@injectable()
export class DistanceController extends BaseController implements IDistanceController {
	constructor(
		@inject(TYPES.LoggerService) protected logger: ILoggerService,
		@inject(TYPES.DistanceService) private distanceService: IDistanceService,
	) {
		super(logger);

		this.bindRoutes([
			{
				path: '/create',
				method: 'post',
				func: this.createDistance,
			},
			{
				path: '/',
				method: 'get',
				func: this.getDistance,
			},
		]);
	}

	async createDistance(
		{ body }: Request<{}, {}, DistanceCreateDto>,
		res: Response,
		next: NextFunction,
	): Promise<void | Error> {
		const result = await this.distanceService.createDistance(body);

		this.ok(res, result);
	}

	async getDistance(req: Request, res: Response, next: NextFunction): Promise<void | Error> {
		const result = await this.distanceService.getDistance();
		this.ok(res, result);
	}
}
