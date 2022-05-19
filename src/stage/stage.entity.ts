export class Stage {
	constructor(private _name: string, private _date: string, private _competitionId: number) {}

	get name(): string {
		return this._name;
	}

	get date(): string {
		return this._date;
	}

	get competitionId(): number {
		return this._competitionId;
	}
}
