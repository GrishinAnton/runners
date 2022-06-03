import { Prisma } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../types';
import {
	ICompetitionStatistic,
	IStatisticRepository,
	TGender,
} from './statistic.repository.interface';
import 'reflect-metadata';

@injectable()
export class StatisticRepository implements IStatisticRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async getCompetitionStatistic(competitonId: number): Promise<ICompetitionStatistic> {
		const [stageCount] = await this.prismaService.client.$queryRaw<
			[{ stageCount: ICompetitionStatistic['stageCount'] }]
		>(
			Prisma.sql`SELECT COUNT(*) as stageCount FROM StageModel WHERE competitionId = ${competitonId}`,
		);

		const [userCount] = await this.prismaService.client.$queryRaw<
			[{ userCount: ICompetitionStatistic['userCount'] }]
		>(
			Prisma.sql`SELECT COUNT(DISTINCT(userId)) as userCount
			FROM CompetitionModel cm
				INNER JOIN
				 StageModel sm ON cm.id = sm.competitionId
				INNER JOIN
				 DistanceModel dm ON sm.id = dm.stageId
				INNER JOIN
					UserModel um ON dm.userId = um.id
			WHERE competitionId = ${competitonId}`,
		);
		const [male, female] = await this.prismaService.client.$queryRaw<
			[{ genderCount: number; gender: TGender }, { genderCount: number; gender: TGender }]
		>(
			Prisma.sql`SELECT DISTINCT COUNT(f.gender) OVER(PARTITION BY f.gender) as genderCount, f.gender
			FROM (
				SELECT um.id, um.gender
				FROM CompetitionModel cm
				INNER JOIN
				 StageModel sm ON cm.id = sm.competitionId
				INNER JOIN
				 DistanceModel dm ON sm.id = dm.stageId
				INNER JOIN
					UserModel um ON dm.userId = um.id
				WHERE competitionId = ${competitonId}
				GROUP BY um.id, um.gender
			) as f
			ORDER BY gender DESC`,
		);

		const [ageCampare] = await this.prismaService.client.$queryRaw<
			[ICompetitionStatistic['ageCampare']]
		>(
			Prisma.sql`SELECT datetime(MIN(um.birthday) / 1000, 'unixepoch', 'localtime') as oldest, datetime(MAX(um.birthday) / 1000, 'unixepoch', 'localtime') as youngest
			FROM CompetitionModel cm
			INNER JOIN
				StageModel sm ON cm.id = sm.competitionId
			INNER JOIN
				DistanceModel dm ON sm.id = dm.stageId
			INNER JOIN
				UserModel um
			WHERE competitionId = ${competitonId}`,
		);

		const [tempCampare] = await this.prismaService.client.$queryRaw<
			[ICompetitionStatistic['tempCampare']]
		>(
			Prisma.sql`SELECT MIN(dm.temp) as fast, MAX(dm.temp) as slow
			FROM CompetitionModel cm
			INNER JOIN
				StageModel sm ON cm.id = sm.competitionId
			INNER JOIN
			 DistanceModel dm ON sm.id = dm.stageId
			WHERE competitionId = ${competitonId}`,
		);

		const [timeCampare] = await this.prismaService.client.$queryRaw<
			[ICompetitionStatistic['timeCampare']]
		>(
			Prisma.sql`SELECT MIN(dm.time) as fast, MAX(dm.time) as slow
			FROM CompetitionModel cm
			INNER JOIN
				StageModel sm ON cm.id = sm.competitionId
			INNER JOIN
			 DistanceModel dm ON sm.id = dm.stageId
			WHERE competitionId = ${competitonId}`,
		);

		const [distanceRun] = await this.prismaService.client.$queryRaw<
			[{ distanceRun: ICompetitionStatistic['distanceRun'] }]
		>(
			Prisma.sql`SELECT SUM(dm.distance) as distanceRun
			FROM CompetitionModel cm
			INNER JOIN
				StageModel sm ON cm.id = sm.competitionId
			INNER JOIN
			 DistanceModel dm ON sm.id = dm.stageId
			WHERE competitionId = ${competitonId}`,
		);

		const [fastest] = await this.prismaService.client.$queryRaw<[ICompetitionStatistic['fastest']]>(
			Prisma.sql`SELECT MIN(dm.temp) as temp, dm.time, um.name, um.surname
			FROM CompetitionModel cm
			INNER JOIN
				StageModel sm ON cm.id = sm.competitionId
			INNER JOIN
				DistanceModel dm ON sm.id = dm.stageId
			INNER JOIN
				UserModel um ON dm.userId = um.id
			WHERE competitionId = ${competitonId}`,
		);

		return {
			...stageCount,
			...userCount,
			sex: {
				male,
				female,
			},
			ageCampare,
			tempCampare,
			timeCampare,
			...distanceRun,
			fastest,
		};
	}
}
