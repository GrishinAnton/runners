
export class UserList {
	constructor(
		private _name: string,
		private _surname: string,
		private _birthday: Date,
	) {}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get surname(): string {
		return this._surname;
	}

	set surname(value: string) {
		this._surname = value;
	}

	get birthday(): Date {
		return this._birthday;
	}

	set birthday(value: Date) {
		this._birthday = value;
	}
}
