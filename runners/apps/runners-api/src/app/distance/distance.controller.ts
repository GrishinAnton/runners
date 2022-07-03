import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../../types';
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
		{ body }: Request<Record<string, unknown>, Record<string, unknown>, DistanceCreateDto>,
		res: Response,
		next: NextFunction,
	): Promise<void | Error> {
		const result = await this.distanceService.createDistance(body);

		this.ok(res, result);
	}

	async getDistance(
		{ query }: Request<Record<string, unknown>, Record<string, unknown>, Record<string, unknown>, { stageId?: string }>,
		res: Response,
		next: NextFunction,
	): Promise<void | Error> {
		const stageId = query.stageId;
		if (!stageId) {
			this.ok(res, 'Вы не передали stageId');
			return;
		}
		const result = await this.distanceService.getDistance(stageId);
		this.ok(res, result);
	}
}
