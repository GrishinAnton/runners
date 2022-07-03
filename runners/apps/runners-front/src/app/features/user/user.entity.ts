export class User {
	constructor(
		private _name: string,
		private _surname: string,
		private _birthday: string,
		private _gender: string,
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

	get birthday(): string {
		return this._birthday;
	}

	set birthday(value: string) {
		this._birthday = value;
	}

	get gender(): string {
		return this._gender;
	}

	set gender(value: string) {
		this._gender = value;
	}
}
