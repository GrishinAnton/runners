import { DateGenerator } from '../common/date';

export class Distance {
	constructor(
		private _time: string,
		private _date: string,
		private _distance: number,
		private _userId: number,
		private _stageId?: number,
	) {}

	get time(): number {
		const milliseconds = DateGenerator.getMillisecondsFromMinutes(this._time);
		return milliseconds;
	}

	get date(): string {
		return this._date;
	}

	get distance(): number {
		return this._distance;
	}

	get temp(): number {
		const seconds = DateGenerator.getSecondsFromMinutes(this._time);

		const kmFromMeters = this._distance / 1000;
		const tempSKm = seconds / kmFromMeters;

		return Math.floor(tempSKm);
	}

	get userId(): number {
		return this._userId;
	}

	get stageId(): number | undefined {
		return this._stageId;
	}
}
