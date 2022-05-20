export class Stage {
	constructor(private _name: string, private _date: string) {}

	get name(): string {
		return this._name;
	}

	get date(): string {
		return this._date;
	}
}
