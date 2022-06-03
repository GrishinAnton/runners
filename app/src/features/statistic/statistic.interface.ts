export type TGender = 'male' | 'female';

export interface ICompetitionStatistic {
	stageCount: number;
	userCount: number;
	sex: {
		male: { genderCount: number; gender: TGender };
		female: { genderCount: number; gender: TGender };
	};
	ageCampare: { oldest: Date; youngest: Date };
	tempCampare: { fast: string; slow: string };
	timeCampare: { fast: string; slow: string };
	distanceRun: number;
	fastest: { temp: string; time: string; name: string; surname: string };
}
