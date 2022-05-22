import { formatISO } from 'date-fns';

export class DateGenerator {
	static getFormatISO(value: string): string {
		const date = new Date(value);
		return formatISO(date);
	}
}
