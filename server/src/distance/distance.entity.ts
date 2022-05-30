import { DateGenerator } from '../common/date';

export class Distance {
	constructor(
		private _time: string,
		private _date: string,
		private _distance: number,
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
		//TODO возвращать посчитанный темп. Переводим все в миллисекунды и потом обратно перемножаем\
		const seconds = DateGenerator.getSecondsFromMinutes(this._time);

		const kmFromMeters = this._distance / 1000;
		const tempSKm = seconds / kmFromMeters;
		const tailTempSKm = String(Math.floor(tempSKm % 60));
		const format = tailTempSKm.length === 1 ? `0${tailTempSKm}` : tailTempSKm;
		const tempMKm = `${Math.floor(tempSKm / 60)}:${format}`;

		return tempMKm;
	}

	get userId(): number {
		return this._userId;
	}

	get stageId(): number | undefined {
		return this._stageId;
	}
}
