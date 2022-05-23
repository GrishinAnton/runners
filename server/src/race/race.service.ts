import { UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { FileChanker } from '../common/fileReader/fileChanker.service';
import { FileReaderService } from '../common/fileReader/fileReader.service';
import { Distance } from '../distance/distance.entity';
import { DistanceService } from '../distance/distance.service';
import { TYPES } from '../types';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { RaceCreateFromFileDto } from './dto/race-createFromFile.dto';
import { IRaceService } from './race.service.interface';

@injectable()
export class RaceService implements IRaceService {
	constructor(
		@inject(TYPES.FileReaderService) private fileReaderService: FileReaderService,
		@inject(TYPES.UserService) private userService: UserService,
		@inject(TYPES.DistanceService) private distanceService: DistanceService,
	) {}

	async createRaceFromFile({
		file,
		stageId,
		date,
		distance,
	}: RaceCreateFromFileDto): Promise<void> {
		const data = this.fileReaderService.getData(file);
		const collection = new FileChanker(data);
		const collectionUsers = collection.getChankData();
		const collectionUsersMan = collectionUsers.women;
		// const collectionUsersWomen = collectionUsers.women;

		for (let i = 0; i < collectionUsersMan.length; i++) {
			const user = collectionUsersMan[i];
			const currentUser = collection.getRunner(user as string[]);
			const currentDistance = collection.getDictance(user as string[]);
			if (currentUser && currentDistance) {
				const gender = 'female';
				const currentClassUser = new User(
					currentUser.name,
					currentUser.surname,
					currentUser.birthday,
					gender,
				);

				let findingOrCreatedUser: UserModel;

				//TODO Тут надо переделать на findOrCreate
				const existedUser = await this.userService.getUser(currentClassUser);
				if (existedUser) {
					findingOrCreatedUser = existedUser;
				} else {
					findingOrCreatedUser = (await this.userService.createUser(currentClassUser)) as UserModel;
				}

				const distanceEntity = new Distance(
					currentDistance.time,
					date,
					distance,
					currentDistance.temp,
					findingOrCreatedUser.id,
					stageId,
				);

				const distanceCreated = await this.distanceService.createDistance(distanceEntity);
			}
		}

		// collectionUsersWomen.forEach((user) => {
		// 	const currentUser = collection.getRunner(user as string[]);
		// 	if (currentUser) {
		// 		currentUser.gender = 'female';
		// 		this.userService.createUser(currentUser);
		// 	}
		// });

		//Прочесть файл
		//Получить пользователей и их дистанцию
		//Создать/сохранить пользователей и прикрепить к ним дистанцию
		//ПРикрепить дистанцию к соревнованию-этапу
	}
}
