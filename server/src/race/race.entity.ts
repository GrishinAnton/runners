export class Race {
	constructor(
		private _file: File,
		private _date: string,
		private _distance: number,
		private _stageId?: number,
		private _competitionId?: number,
	) {}

	get file(): File {
		return this._file;
	}

	get stageId(): number | null {
		return this._stageId || null;
	}

	get competitionId(): number | null {
		return this._competitionId || null;
	}

	get date(): string {
		return this._date;
	}

	get distance(): number {
		return this._distance;
	}
}
