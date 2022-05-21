import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';
import { IStageController } from './stage.controller.interace';
import { StageCreateDto } from './dto/stage-create.dto';
import { IStageService } from './stage.service.interface';

@injectable()
export class StageController extends BaseController implements IStageController {
	constructor(
		@inject(TYPES.LoggerService) protected logger: ILoggerService,
		@inject(TYPES.StageService) private stageService: IStageService,
	) {
		super(logger);

		this.bindRoutes([
			{
				path: '/create',
				method: 'post',
				func: this.createStage,
			},
			{
				path: '/',
				method: 'get',
				func: this.getStage,
			},
		]);
	}

	async createStage(
		{ body }: Request<{}, {}, StageCreateDto>,
		res: Response,
		next: NextFunction,
	): Promise<void | Error> {
		const result = await this.stageService.createStage(body);
		if (!result) {
			this.send(res, 422, 'Такой этап уже существует');
			return;
		}
		this.ok(res, result);
	}

	async getStage(req: Request, res: Response, next: NextFunction): Promise<void | Error> {
		const result = await this.stageService.getStage();
		this.ok(res, result);
	}
}
