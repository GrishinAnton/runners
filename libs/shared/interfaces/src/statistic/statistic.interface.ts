import { UserGender } from "@prisma/client";

export interface ICompetitionStatistic {
	stageCount: number;
	userCount: number;
	sex: {
		male: { genderCount: number; gender: UserGender };
		female: { genderCount: number; gender: UserGender };
	};
	ageCampare: { oldest: Date; youngest: Date };
	tempCampare: { fast: number; slow: number };
	timeCampare: { fast: number; slow: number };
	distanceRun: number;
	fastest: { temp: number; time: number; name: string; surname: string };
}

export interface IUserStatistic {
	stageId: number;
	stageName: string;
	distanceTime: number;
	distanceTemp: number;
}
