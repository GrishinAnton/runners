import { UserGender } from '@prisma/client';
import { DateGenerator } from '../date';
import { IFileReaderRows } from './fileReader.service';

interface IFileChanker {
	chanks: unknown[][][];
	collect: Record<UserGender, unknown[][]>;
}

const defaultCollect = {
	[UserGender.MALE]: [],
	[UserGender.FEMALE]: [],
};

export class FileChanker {
	private chanks: IFileChanker['chanks'] = [];
	private clearedChanks: IFileChanker['chanks'] = [];
	private collectObj: IFileChanker['collect'] = defaultCollect;

	constructor(private rows: IFileReaderRows['row']) {}

	private chank(): void {
		let chank: unknown[][] = [];
		for (let i = 0; i < this.rows.length; i++) {
			chank.push(this.rows[i]);
			if (!this.rows[i + 1]?.length) {
				this.chanks.push(chank);
				chank = [];
			}
		}
	}

	private clearEmpty(): void {
		const chanks = [...this.chanks];

		const clear = (arr: any[]) => {
			const result: any[] = [];

			arr.forEach((item) => {
				if (Array.isArray(item) && item.length) {
					result.push(clear(item));
				} else if (item?.length) {
					result.push(item);
				}
			});
			return result;
		};
		this.clearedChanks = chanks.map((chank) => clear(chank));
	}

	private collect(): void {
		this.clearedChanks.forEach((chank, index) => {
			if (index === 1) {
				this.collectObj[UserGender.MALE] = chank.slice(1, chank.length);
			}
			if (index === 3) {
				this.collectObj[UserGender.FEMALE] = chank.slice(1, chank.length - 1);
			}
		});
	}

	getChankData(): IFileChanker['collect'] {
		this.chank();
		this.clearEmpty();
		this.collect();

		return this.collectObj;
	}

	static getRunner(runner: string[]): { name: string; surname: string; birthday: string } | null {
		const defaultUser = {
			name: '',
			surname: '',
			birthday: '',
		};

		if (runner.length) {
			try {
				const date = runner[2] as unknown as string;

				defaultUser['name'] = runner[1].split(' ')[1] || '';
				defaultUser['surname'] = runner[1].split(' ')[0] || '';
				defaultUser['birthday'] = date
					? DateGenerator.getFormatISO(date)
					: DateGenerator.getFormatISO(new Date().toISOString());

				return defaultUser;
			} catch (e) {
				console.log(e);
				return null;
			}
		}

		return null;
	}

	static getDictance(distance: string[]): {
		time: string;
	} | null {
		const defaultDictance = {
			time: '0',
		};
		if (distance.length) {
			try {
				defaultDictance['time'] = distance[3] || '0';

				return defaultDictance;
			} catch (e) {
				console.log(e);
				return null;
			}
		}
		return null;
	}
}
