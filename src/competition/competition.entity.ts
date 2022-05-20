export class Competition {
	constructor(private _name: string) {}

	get name(): string {
		return this._name;
	}
}
