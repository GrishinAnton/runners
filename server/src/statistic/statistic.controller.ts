import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';
import { GetCompetitionStatisticDto } from './dto/statistic-competition.dto';
import { IStatisticController } from './statistic.controller.interface';
import { IStatisticService } from './statistic.service.interface';

@injectable()
export class StatisticController extends BaseController implements IStatisticController {
	constructor(
		@inject(TYPES.LoggerService) protected logger: ILoggerService,
		@inject(TYPES.StatisticService) protected statisticService: IStatisticService,
	) {
		super(logger);

		this.bindRoutes([
			{
				path: '/competition/:id',
				method: 'get',
				func: this.getCompetitionStatistic,
			},
		]);
	}

	async getCompetitionStatistic(
		{ params }: Request<GetCompetitionStatisticDto, {}, {}>,
		res: Response,
		next: NextFunction,
	): Promise<void | Error> {
		const id = params.id;
		if (!id) {
			this.ok(res, 'Вы не передали id');
			return;
		}

		const result = await this.statisticService.getCompetitionStatistic(Number(id));
		this.ok(res, result);
	}
}
