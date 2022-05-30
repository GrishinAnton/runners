export class Distance {
	constructor(
		private _time: string,
		private _date: string,
		private _distance: number,
		private _temp: string,
		private _userId: number,
		private _stageId?: number,
	) {}

	get time(): string {
		return this._time;
	}

	get date(): string {
		return this._date;
	}

	get distance(): number {
		return this._distance;
	}

	get temp(): string {
		return this._temp;
	}

	get userId(): number {
		return this._userId;
	}

	get stageId(): number | undefined {
		return this._stageId;
	}
}
