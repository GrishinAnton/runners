export class Competition {
	constructor(private _name: string, private _startDate: string, private _endDate?: string) {}

	get name(): string {
		return this._name;
	}

	get startDate(): string {
		return this._startDate;
	}

	get endDate(): string | null {
		return this._endDate || null;
	}
}
