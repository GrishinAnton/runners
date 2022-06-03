export interface IStatisticRepository {
	getCompetitionStatistic: (competitionId: number) => Promise<ICompetitionStatistic>;
}

export type TGender = 'male' | 'female';

export interface ICompetitionStatistic {
	stageCount: number;
	userCount: number;
	sex: {
		male: { genderCount: number; gender: TGender };
		female: { genderCount: number; gender: TGender };
	};
	ageCampare: { oldest: Date; youngest: number };
	tempCampare: { fast: Date; slow: string };
	timeCampare: { fast: Date; slow: string };
	distanceRun: number;
	fastest: { temp: string; time: string; name: string; surname: string };
}
