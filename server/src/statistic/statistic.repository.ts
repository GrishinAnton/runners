import { Prisma, StageModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../types';
import { IStatisticRepository } from './statistic.repository.interface';
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
			[{ genderCount: number; gender: string }, { genderCount: number; gender: string }]
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
			Prisma.sql`SELECT MIN(um.birthday) as oldest, MAX(um.birthday) as youngest
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
			[{ fast: string; slow: string }]
		>(
			Prisma.sql`SELECT MIN(dm.temp) as fast, MAX(dm.temp) as slow
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
			...distanceRun,
			fastest,
		};
	}
}

export interface ICompetitionStatistic {
	stageCount: number;
	userCount: number;
	sex: {
		male: { genderCount: number; gender: string };
		female: { genderCount: number; gender: string };
	};
	ageCampare: { oldest: number; youngest: number };
	tempCampare: { fast: string; slow: string };
	distanceRun: number;
	fastest: { temp: string; time: string; name: string; surname: string };
}
