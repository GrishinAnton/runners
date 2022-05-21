export class Stage {
	constructor(private _name: string, private _date: Date) {}

	get name(): string {
		return this._name;
	}

	get date(): Date {
		return this._date;
	}
}
