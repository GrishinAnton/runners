import { Prisma } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../database/prisma.service';
import { TYPES } from '../../types';
import {
	IStatisticRepository,
} from './statistic.repository.interface';
import {ICompetitionStatistic, IUserStatistic} from '@runners/shared/interfaces'
import { UserGender } from "@prisma/client";
import 'reflect-metadata';

@injectable()
export class StatisticRepository implements IStatisticRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async getCompetitionStatistic(competitonId: number): Promise<ICompetitionStatistic> {
		const [stageCount] = await this.prismaService.client.$queryRaw<
			[{ stageCount: ICompetitionStatistic['stageCount'] }]
		>(
			Prisma.sql`SELECT COUNT(*) as "stageCount" FROM stagemodel WHERE competitionid = ${competitonId};`,
		);

		const [userCount] = await this.prismaService.client.$queryRaw<
			[{ userCount: ICompetitionStatistic['userCount'] }]
		>(
			Prisma.sql`SELECT COUNT(DISTINCT(userid)) as "userCount"
			FROM competitionmodel cm
				INNER JOIN
				 stagemodel sm ON cm.id = sm.competitionid
				INNER JOIN
				 distancemodel dm ON sm.id = dm.stageid
				INNER JOIN
					usermodel um ON dm.userid = um.id
			WHERE competitionid = ${competitonId};`,
		);
		const [male, female] = await this.prismaService.client.$queryRaw<
			[{ genderCount: number; gender: UserGender }, { genderCount: number; gender: UserGender }]
		>(
			Prisma.sql`SELECT DISTINCT COUNT(f.gender) OVER(PARTITION BY f.gender) as "genderCount", f.gender
			FROM (
				SELECT um.id, um.gender
				FROM competitionmodel cm
				INNER JOIN
					stagemodel sm ON cm.id = sm.competitionid
				INNER JOIN
					distancemodel dm ON sm.id = dm.stageid
				INNER JOIN
					usermodel um ON dm.userid = um.id
				WHERE competitionid = ${competitonId}
				GROUP BY um.id, um.gender
			) as f
			ORDER BY gender DESC;`,
		);

		const [ageCampare] = await this.prismaService.client.$queryRaw<
			[ICompetitionStatistic['ageCampare']]
		>(
			Prisma.sql`SELECT MIN(DATE(um.birthday)) as oldest, MAX(DATE(um.birthday)) as youngest
			FROM competitionmodel cm
			INNER JOIN
				stagemodel sm ON cm.id = sm.competitionid
			INNER JOIN
				distancemodel dm ON sm.id = dm.stageid
			INNER JOIN
				usermodel um ON dm.userid = um.id
			WHERE competitionid = ${competitonId};`,
		);

		const [tempCampare] = await this.prismaService.client.$queryRaw<
			[ICompetitionStatistic['tempCampare']]
		>(
			Prisma.sql`SELECT MIN(dm.temp) as fast, MAX(dm.temp) as slow
			FROM competitionmodel cm
			INNER JOIN
				stagemodel sm ON cm.id = sm.competitionid
			INNER JOIN
				distancemodel dm ON sm.id = dm.stageid
			WHERE competitionid = ${competitonId};`,
		);

		const [timeCampare] = await this.prismaService.client.$queryRaw<
			[ICompetitionStatistic['timeCampare']]
		>(
			Prisma.sql`SELECT MIN(dm.time) as fast, MAX(dm.time) as slow
			FROM competitionmodel cm
			INNER JOIN
				stagemodel sm ON cm.id = sm.competitionid
			INNER JOIN
				distancemodel dm ON sm.id = dm.stageid
			WHERE competitionid = ${competitonId};`,
		);

		const [distanceRun] = await this.prismaService.client.$queryRaw<
			[{ distanceRun: ICompetitionStatistic['distanceRun'] }]
		>(
			Prisma.sql`SELECT SUM(dm.distance) as "distanceRun"
			FROM competitionmodel cm
			INNER JOIN
				stagemodel sm ON cm.id = sm.competitionid
			INNER JOIN
				distancemodel dm ON sm.id = dm.stageid
			WHERE competitionid = ${competitonId};`,
		);

		const [fastest] = await this.prismaService.client.$queryRaw<[ICompetitionStatistic['fastest']]>(
			Prisma.sql`SELECT MIN(dm.temp) as temp, dm.time, um.name, um.surname
			FROM competitionmodel cm
			INNER JOIN
				stagemodel sm ON cm.id = sm.competitionid
			INNER JOIN
				distancemodel dm ON sm.id = dm.stageid
			INNER JOIN
				usermodel um ON dm.userid = um.id
			WHERE competitionid = ${competitonId}
			GROUP BY
				temp, dm.time, um.name, um.surname;`,
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

	async getUserStatistic(userId: number): Promise<IUserStatistic[]> {
		const result = await this.prismaService.client.$queryRaw<
			IUserStatistic[]
		>(Prisma.sql`SELECT sm.name as "stageName", sm.id as "stageId", dm.time as "distanceTime", dm.temp as "distanceTemp"
		FROM distancemodel dm
		INNER JOIN 
			stagemodel sm ON dm.stageid = sm.id
		INNER JOIN
			competitionmodel cm ON sm.competitionid = cm.id
		WHERE userid = ${userId}
		ORDER BY stageid ASC;`);
		return result;
	}
}
