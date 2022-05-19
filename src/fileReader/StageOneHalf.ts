import { User } from '../user/user.entity';
import { IFileReaderRows } from './fileReader';

interface IStageOneHalf {
	chanks: unknown[][][];
	collect: Record<ECollect, unknown[][]>;
}

enum ECollect {
	MAN = 'man',
	WOMEN = 'women',
}

const defaultCollect = {
	[ECollect.MAN]: [],
	[ECollect.WOMEN]: [],
};

export class StageOneHalf {
	rows: IFileReaderRows['row'];
	chanks: IStageOneHalf['chanks'] = [];
	clearedChanks: IStageOneHalf['chanks'] = [];
	collectObj: IStageOneHalf['collect'] = defaultCollect;

	constructor(rows: IFileReaderRows['row']) {
		this.rows = rows;
	}

	chank() {
		let chank: unknown[][] = [];
		for (let i = 0; i < this.rows.length; i++) {
			chank.push(this.rows[i]);
			if (!this.rows[i + 1]?.length) {
				this.chanks.push(chank);
				chank = [];
			}
		}
	}

	clearEmpty() {
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

	collect() {
		this.clearedChanks.forEach((chank, index) => {
			if (index === 1) {
				this.collectObj[ECollect.MAN] = chank.slice(1, chank.length - 1);
			}
			if (index === 3) {
				this.collectObj[ECollect.WOMEN] = chank.slice(1, chank.length - 2);
			}
		});
	}

	getRunner(runner: string[]): User | null {
		const defaultUser = {
			name: '',
			surname: '',
			birthday: '',
		};
		const result: User = new User(defaultUser.name, defaultUser.surname, defaultUser.birthday);
		if (runner.length) {
			try {
				result['name'] = runner[1].split(' ')[1] || '';
				result['surname'] = runner[1].split(' ')[0] || '';
				result['birthday'] = runner[2] || '';

				return result;
			} catch (e) {
				console.log(e);
				return null;
			}
		}

		return null;
	}
}
