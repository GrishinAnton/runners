import express, { Express } from 'express';
import { inject, injectable } from 'inversify';
import { json } from 'body-parser';
import { Server } from 'http';
import { PrismaService } from './database/prisma.service';
import { TYPES } from './types';
import 'reflect-metadata';
import { ILoggerService } from './logger/logger.interface';
import { CompetitionController } from './competition/competition.controller';
import { StageController } from './stage/stage.controller';
import { UserController } from './user/user.controller';
import { DistanceController } from './distance/distance.controller';
import { RaceController } from './race/race.controller';
import { uploadMiddleware } from './common/fileUpload.service';
import { StatisticController } from './statistic/statistic.controller';

@injectable()
export class App {
	app: Express;
	server: Server;
	port: number;

	constructor(
		@inject(TYPES.PrismaService) private prismaService: PrismaService,
		@inject(TYPES.LoggerService) private logger: ILoggerService,
		@inject(TYPES.CompetitionController) private competitionController: CompetitionController,
		@inject(TYPES.StageController) private stageController: StageController,
		@inject(TYPES.UserController) private userController: UserController,
		@inject(TYPES.DistanceController) private distanceController: DistanceController,
		@inject(TYPES.RaceController) private raceController: RaceController,
		@inject(TYPES.StatisticController) private statisticController: StatisticController,
	) {
		this.app = express();
		this.port = Number(process.env.PORT) || 5000;
	}

	useMiddleware(): void {
		this.app.use(json());
		this.app.use(uploadMiddleware);
	}

	useRoutes(): void {
		this.app.use('/competition', this.competitionController.router);
		this.app.use('/stage', this.stageController.router);
		this.app.use('/user', this.userController.router);
		this.app.use('/distance', this.distanceController.router);
		this.app.use('/race', this.raceController.router);
		this.app.use('/statistic', this.statisticController.router);
	}

	public async init(): Promise<void> {
		this.useMiddleware();
		this.useRoutes();
		await this.prismaService.connectDB();
		this.app.listen(this.port);
		this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
	}

	public close(): void {
		this.server.close();
	}
}
