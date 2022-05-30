import { formatISO, getTime, minutesToMilliseconds } from 'date-fns';

export class DateGenerator {
	static getFormatISO(value: string): string {
		const date = new Date(value);
		return formatISO(date);
	}

	static getSecondsFromMinutes(value: string): number {
		const partMinute = value.split(':');
		const leftPart = Number(partMinute[0]) * 60;
		const rightPart = Math.round(Number(partMinute[1]));

		return leftPart + rightPart;
	}
}
