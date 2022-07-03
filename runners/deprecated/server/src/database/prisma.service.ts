import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor(@inject(TYPES.LoggerService) private logger: ILoggerService) {
		this.client = new PrismaClient();
	}

	async connectDB(): Promise<void> {
		try {
			await this.client.$connect();
			this.logger.log(`[PrismaService]: База данных подключена`);
		} catch (e) {
			if (e instanceof Error) {
				this.logger.error(`[PrismaService]: База данных не подключена: ${e}`);
			}
		}
	}

	async disconnectDB(): Promise<void> {
		await this.client.$disconnect();
	}
}
