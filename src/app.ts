import express, { Express } from 'express';
import { inject, injectable } from 'inversify';
import { resolve } from 'path';
import { PrismaService } from './database/prisma.service';
import { FileReader } from './fileReader/fileReader';
import { StageOneHalf } from './fileReader/StageOneHalf';
import { TYPES } from './types';
import 'reflect-metadata';

@injectable()
export class App {
	app: Express;
	port: number;

	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {
		this.app = express();
		this.port = 8000;
	}

	// fileReader() {
	// 	const file = resolve('./') + '/protocol8abs.xlsx';
	// 	const fileReader = new FileReader(file);
	// 	return fileReader.getData();
	// }

	public async init(): Promise<void> {
		await this.prismaService.connectDB();
		this.app.listen(this.port);
		console.log('server start');
	}
}

// const app = new App();
// export const repository = new PrismaService();
// repository.connectDB();

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
