import { formatISO } from 'date-fns';

export class DateGenerator {
	static getFormatISO(value: string): string {
		const date = new Date(value);
		return formatISO(date);
	}

	static getSecondsFromMinutes(value: string): number {
		const partMinute = value.split(':');
		const leftPart = Number(partMinute[0]) * 60;
		const rightPart = Math.round(Number(partMinute[1]));
		// Не считаю до миллисекунд, а просто округляюн

		return leftPart + rightPart;
	}

	static getMillisecondsFromMinutes(value: string): number {
		const partMinute = value.split(':');
		const leftPart = Number(partMinute[0]) * 60 * 1000;
		const rightPart = partMinute[1].split('.');
		const rightPartSeconds = Number(rightPart[0]) * 1000;
		const rightPartMilliseconds = Number(rightPart[1]);

		return leftPart + rightPartSeconds + rightPartMilliseconds;
	}
}
