export type TGender = 'male' | 'female';

export interface ICompetitionStatistic {
	stageCount: number;
	userCount: number;
	sex: {
		male: { genderCount: number; gender: TGender };
		female: { genderCount: number; gender: TGender };
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
