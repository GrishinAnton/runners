import { ESortType } from '../../components/ui/SortButtonForTable/SortButtonForTable';

export class UserSort {
	surnameSort?: ESortType;
	birthdaySort?: ESortType;
	genderSort?: ESortType;

	constructor(surnameSort?: ESortType, birthdaySort?: ESortType, genderSort?: ESortType) {
		this.surnameSort = surnameSort;
		this.birthdaySort = birthdaySort;
		this.genderSort = genderSort;
	}
}
