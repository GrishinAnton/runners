import { UserGender } from "@prisma/client";

export class User {
	constructor(
		private _name: string,
		private _surname: string,
		private _birthday: string,
		private _gender: UserGender,
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

	get gender(): UserGender {
		return this._gender;
	}

	set gender(value: UserGender) {
		this._gender = value;
	}
}
