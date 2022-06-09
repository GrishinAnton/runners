import { format, parseISO } from 'date-fns';

export const getAge = (date: string): number =>
	Number(format(new Date(), 'yyyy')) - Number(format(parseISO(date), 'yyyy'));

export const getTempFromSec = (temp: number): string => {
	// Преобразование в строку
	const tailTempSKm = String(Math.floor(temp % 60));
	const format = tailTempSKm.length === 1 ? `0${tailTempSKm}` : tailTempSKm;
	const tempMKm = `${Math.floor(temp / 60)}:${format}`;

	return tempMKm;
};

export const getTimeFromMilliseconds = (milliseconds: number): string => {
	const seconds = milliseconds / 1000;
	const secondsTail = String(Number.parseFloat(String(seconds % 60)).toFixed(3));
	const secondsLength = secondsTail.split('.')[0];
	const format = secondsLength.length === 1 ? `0${secondsTail}` : secondsTail;
	const min = seconds / 60;

	return `${Math.floor(min)}:${format}`;
};

export const getBirthdayFormat = (value: string) => format(parseISO(value), 'dd.MM.yyyy');
