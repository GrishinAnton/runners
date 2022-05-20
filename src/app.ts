import express, { Express } from 'express';
import { inject, injectable } from 'inversify';
import { json } from 'body-parser';
import { Server } from 'http';
import { resolve } from 'path';
import { PrismaService } from './database/prisma.service';
import { FileReader } from './fileReader/fileReader';
import { StageOneHalf } from './fileReader/StageOneHalf';
import { TYPES } from './types';
import 'reflect-metadata';
import { ILoggerService } from './logger/logger.interface';
import { CompetitionController } from './competition/competition.controller';
import { StageController } from './stage/stage.controller';

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
	) {
		this.app = express();
		this.port = 8000;
	}

	useMiddleware(): void {
		this.app.use(json());
	}

	useRoutes(): void {
		this.app.use('/competition', this.competitionController.router);
		this.app.use('/stage', this.stageController.router);
	}

	// fileReader() {
	// 	const file = resolve('./') + '/protocol8abs.xlsx';
	// 	const fileReader = new FileReader(file);
	// 	return fileReader.getData();
	// }

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

// const data = app.fileReader();

// const stageReader = new StageOneHalf(data);
// stageReader.chank();
// stageReader.clearEmpty();
// stageReader.collect();
// const user = stageReader.getRunner(stageReader.collectObj.man[0] as string[]);

// const userRepository = new UserRepository();
// const userer = userRepository.create(user!).then((res) => console.log(res));
// const finder = userRepository
// 	.find({ name: 'Филипп', surname: 'Шинкин' })
// 	.then((res) => console.log(res));
