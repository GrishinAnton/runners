import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';
import { IRaceController } from './race.controller.interface';
import 'reflect-metadata';
import { RaceCreateFromFileDto } from './dto/race-createFromFile.dto';
import { IRaceService } from './race.service.interface';
import { resolve } from 'path';

@injectable()
export class RaceController extends BaseController implements IRaceController {
	constructor(
		@inject(TYPES.LoggerService) protected logger: ILoggerService,
		@inject(TYPES.RaceService) private raceService: IRaceService,
	) {
		super(logger);

		this.bindRoutes([
			{
				path: '/create-from-file',
				method: 'post',
				func: this.createRaceFromFile,
			},
		]);
	}

	async createRaceFromFile(req: Request, res: Response, next: NextFunction): Promise<void | Error> {
		const file = resolve('./') + '/file/protocol8abs.xlsx';
		const result = await this.raceService.createRaceFromFile({
			file,
			stageId: 1,
			date: new Date().toISOString(),
			distance: 1500,
		});

		this.ok(res, result);
	}
}
