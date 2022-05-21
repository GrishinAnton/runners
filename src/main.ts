import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { CompetitionController } from './competition/competition.controller';
import { ICompetitionController } from './competition/competition.controller.interface';
import { CompetitionService } from './competition/competition.service';
import { ICompetitionService } from './competition/competition.service.interface';
import { PrismaService } from './database/prisma.service';
import { ILoggerService } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { StageController } from './stage/stage.controller';
import { IStageController } from './stage/stage.controller.interace';
import { StageService } from './stage/stage.service';
import { IStageService } from './stage/stage.service.interface';
import { TYPES } from './types';
import { UserController } from './user/user.controller';
import { IUserController } from './user/user.controller.interface';
import { UserService } from './user/user.service';
import { IUserService } from './user/user.service.interface';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES.Application).to(App);
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
	bind<ICompetitionController>(TYPES.CompetitionController).to(CompetitionController);
	bind<ICompetitionService>(TYPES.CompetitionService).to(CompetitionService);
	bind<IStageController>(TYPES.StageController).to(StageController);
	bind<IStageService>(TYPES.StageService).to(StageService);
	bind<IUserController>(TYPES.UserController).to(UserController);
	bind<IUserService>(TYPES.UserService).to(UserService);
	bind<ILoggerService>(TYPES.LoggerService).to(LoggerService).inSingletonScope();
});

async function bootstrap(): Promise<IBootstrapReturn> {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	await app.init();

	return { appContainer, app };
}

export const boot = bootstrap();
