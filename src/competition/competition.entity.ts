import { Stage } from '../stage/stage.entity';

export class Competition {
	constructor(private _name: string, private _stages: Stage[]) {}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get stages(): Stage[] {
		return this._stages;
	}
}
