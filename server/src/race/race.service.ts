import { UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { ECollect, FileChanker } from '../common/fileReader/fileChanker.service';
import { FileReaderService } from '../common/fileReader/fileReader.service';
import { Distance } from '../distance/distance.entity';
import { DistanceService } from '../distance/distance.service';
import { DistanceCreateDto } from '../distance/dto/distance-create.dto';
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
		const collectionUsersMan = collectionUsers[ECollect.MALE];
		const collectionUsersWomen = collectionUsers[ECollect.FEMALE];

		await this.createDistance(collectionUsersMan, ECollect.MALE, date, distance, stageId);
		await this.createDistance(collectionUsersWomen, ECollect.FEMALE, date, distance, stageId);
	}

	private async createDistance(
		users: unknown[][],
		gender: ECollect,
		date: RaceCreateFromFileDto['date'],
		distance: RaceCreateFromFileDto['distance'],
		stageId: RaceCreateFromFileDto['stageId'],
	): Promise<void> {
		for (let i = 0; i < users.length; i++) {
			const user = users[i];
			const currentUser = FileChanker.getRunner(user as string[]);
			const currentDistance = FileChanker.getDictance(user as string[]);
			if (currentUser && currentDistance) {
				const currentClassUser = new User(
					currentUser.name,
					currentUser.surname,
					currentUser.birthday,
					gender,
				);

				const findingOrCreatedUser = await this.userService.findOrCreateUser(currentClassUser);

				const distanceEntity: DistanceCreateDto = {
					time: currentDistance.time,
					date,
					distance,
					userId: findingOrCreatedUser.id,
					stageId,
				};

				await this.distanceService.createDistance(distanceEntity);
			}
		}
	}
}
