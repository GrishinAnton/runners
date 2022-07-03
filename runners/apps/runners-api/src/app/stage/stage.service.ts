import { StageModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';
import 'reflect-metadata';
import { StageCreateDto } from './dto/stage-create.dto';
import { Stage } from './stage.entity';
import { IStageService } from './stage.service.interface';
import { IStageRepository } from './stage.repository.interface';

@injectable()
export class StageService implements IStageService {
	constructor(@inject(TYPES.StageRepository) private stageRepository: IStageRepository) {}

	async createStage({ name, date, competitionId }: StageCreateDto): Promise<StageModel | null> {
		const stage = new Stage(name, date, competitionId);

		const existedCompetition = await this.stageRepository.findBy(stage);

		if (existedCompetition) {
			return null;
		}

		return this.stageRepository.create(stage);
	}

	async getStage(): Promise<StageModel[] | null> {
		return await this.stageRepository.get();
	}

	async getStageById(id: string): Promise<StageModel | null> {
		return await this.stageRepository.getStageById(Number(id));
	}
}
