import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { FileReaderService } from './app/common/fileReader/fileReader.service';
import { CompetitionController } from './app/competition/competition.controller';
import { ICompetitionController } from './app/competition/competition.controller.interface';
import { CompetitionRepository } from './app/competition/competition.repository';
import { ICompetitionRepository } from './app/competition/competition.repository.interface';
import { CompetitionService } from './app/competition/competition.service';
import { ICompetitionService } from './app/competition/competition.service.interface';
import { PrismaService } from './app/database/prisma.service';
import { DistanceController } from './app/distance/distance.controller';
import { IDistanceController } from './app/distance/distance.controller.interface';
import { DistanceRepository } from './app/distance/distance.repository';
import { IDistanceRepository } from './app/distance/distance.repository.interface';
import { DistanceService } from './app/distance/distance.service';
import { IDistanceService } from './app/distance/distance.service.interface';
import { ILoggerService } from './app/logger/logger.interface';
import { LoggerService } from './app/logger/logger.service';
import { RaceController } from './app/race/race.controller';
import { IRaceController } from './app/race/race.controller.interface';
import { RaceService } from './app/race/race.service';
import { IRaceService } from './app/race/race.service.interface';
import { StageController } from './app/stage/stage.controller';
import { IStageController } from './app/stage/stage.controller.interace';
import { StageRepository } from './app/stage/stage.repository';
import { IStageRepository } from './app/stage/stage.repository.interface';
import { StageService } from './app/stage/stage.service';
import { IStageService } from './app/stage/stage.service.interface';
import { StatisticController } from './app/statistic/statistic.controller';
import { IStatisticController } from './app/statistic/statistic.controller.interface';
import { StatisticRepository } from './app/statistic/statistic.repository';
import { IStatisticRepository } from './app/statistic/statistic.repository.interface';
import { StatisticService } from './app/statistic/statistic.service';
import { IStatisticService } from './app/statistic/statistic.service.interface';
import { TYPES } from './types';
import { UserController } from './app/user/user.controller';
import { IUserController } from './app/user/user.controller.interface';
import { UserRepository } from './app/user/user.repository';
import { IUserRepository } from './app/user/user.repositoty.interface';
import { UserService } from './app/user/user.service';
import { IUserService } from './app/user/user.service.interface';

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
