export class Stage {
	constructor(private _name: string, private _date: Date, private _competitionId: number) {}

	get name(): string {
		return this._name;
	}

	get date(): Date {
		return this._date;
	}

	get competitionId(): number {
		return this._competitionId;
	}
}
