import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { PrismaService } from './database/prisma.service';
import { ILoggerService } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES.Application).to(App);
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService);
	bind<ILoggerService>(TYPES.LoggerService).to(LoggerService);
});

async function bootstrap(): Promise<IBootstrapReturn> {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	await app.init();

	return { appContainer, app };
}

export const boot = bootstrap();
