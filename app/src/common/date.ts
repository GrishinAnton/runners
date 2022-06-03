import { format } from 'date-fns';

export const getAge = (date: string): number =>
	Number(format(new Date(), 'yyyy')) - Number(format(new Date(date), 'yyyy'));
