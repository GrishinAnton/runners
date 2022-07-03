import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { FileReaderService } from './common/fileReader/fileReader.service';
import { CompetitionController } from './competition/competition.controller';
import { ICompetitionController } from './competition/competition.controller.interface';
import { CompetitionRepository } from './competition/competition.repository';
import { ICompetitionRepository } from './competition/competition.repository.interface';
import { CompetitionService } from './competition/competition.service';
import { ICompetitionService } from './competition/competition.service.interface';
import { PrismaService } from './database/prisma.service';
import { DistanceController } from './distance/distance.controller';
import { IDistanceController } from './distance/distance.controller.interface';
import { DistanceRepository } from './distance/distance.repository';
import { IDistanceRepository } from './distance/distance.repository.interface';
import { DistanceService } from './distance/distance.service';
import { IDistanceService } from './distance/distance.service.interface';
import { ILoggerService } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { RaceController } from './race/race.controller';
import { IRaceController } from './race/race.controller.interface';
import { RaceService } from './race/race.service';
import { IRaceService } from './race/race.service.interface';
import { StageController } from './stage/stage.controller';
import { IStageController } from './stage/stage.controller.interace';
import { StageRepository } from './stage/stage.repository';
import { IStageRepository } from './stage/stage.repository.interface';
import { StageService } from './stage/stage.service';
import { IStageService } from './stage/stage.service.interface';
import { StatisticController } from './statistic/statistic.controller';
import { IStatisticController } from './statistic/statistic.controller.interface';
import { StatisticRepository } from './statistic/statistic.repository';
import { IStatisticRepository } from './statistic/statistic.repository.interface';
import { StatisticService } from './statistic/statistic.service';
import { IStatisticService } from './statistic/statistic.service.interface';
import { TYPES } from './types';
import { UserController } from './user/user.controller';
import { IUserController } from './user/user.controller.interface';
import { UserRepository } from './user/user.repository';
import { IUserRepository } from './user/user.repositoty.interface';
import { UserService } from './user/user.service';
import { IUserService } from './user/user.service.interface';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES.Application).to(App);
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
	bind<ILoggerService>(TYPES.LoggerService).to(LoggerService).inSingletonScope();
	bind<ICompetitionController>(TYPES.CompetitionController).to(CompetitionController);
	bind<ICompetitionService>(TYPES.CompetitionService).to(CompetitionService);
	bind<ICompetitionRepository>(TYPES.CompetitionRepository).to(CompetitionRepository);
	bind<IStageController>(TYPES.StageController).to(StageController);
	bind<IStageService>(TYPES.StageService).to(StageService);
	bind<IStageRepository>(TYPES.StageRepository).to(StageRepository);
	bind<IUserController>(TYPES.UserController).to(UserController);
	bind<IUserService>(TYPES.UserService).to(UserService);
	bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
	bind<IDistanceController>(TYPES.DistanceController).to(DistanceController);
	bind<IDistanceService>(TYPES.DistanceService).to(DistanceService);
	bind<IDistanceRepository>(TYPES.DistanceRepository).to(DistanceRepository);
	bind<IRaceController>(TYPES.RaceController).to(RaceController);
	bind<IRaceService>(TYPES.RaceService).to(RaceService);
	bind<FileReaderService>(TYPES.FileReaderService).to(FileReaderService);
	bind<IStatisticService>(TYPES.StatisticService).to(StatisticService);
	bind<IStatisticRepository>(TYPES.StatisticRepository).to(StatisticRepository);
	bind<IStatisticController>(TYPES.StatisticController).to(StatisticController);
});

async function bootstrap(): Promise<IBootstrapReturn> {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	await app.init();

	return { appContainer, app };
}

export const boot = bootstrap();
