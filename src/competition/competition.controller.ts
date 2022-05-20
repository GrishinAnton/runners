import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';
import { ICompetitionController } from './competition.controller.interface';
import { CompetitionCreateDto } from './dto/competition-create.dto';
import 'reflect-metadata';
import { ICompetitionService } from './competition.service.interface';

@injectable()
export class CompetitionController extends BaseController implements ICompetitionController {
	constructor(
		@inject(TYPES.LoggerService) protected logger: ILoggerService,
		@inject(TYPES.CompetitionService) private competitionService: ICompetitionService,
	) {
		super(logger);

		this.bindRoutes([
			{
				path: '/create',
				method: 'post',
				func: this.create,
			},
		]);
	}

	async create(
		{ body }: Request<{}, {}, CompetitionCreateDto>,
		res: Response,
		next: NextFunction,
	): Promise<void | Error> {
		const result = await this.competitionService.create(body);
		if (!result) {
			this.send(res, 422, 'Такое соревнование уже существует');
			return;
		}
		this.ok(res, result);
	}
}
