import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor() {
		this.client = new PrismaClient();
	}

	async connectDB(): Promise<void> {
		try {
			await this.client.$connect();
		} catch (e) {
			console.log(e);
		}
	}

	async disconnectDB(): Promise<void> {
		await this.client.$disconnect();
	}
}
