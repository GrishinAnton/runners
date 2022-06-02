import { ESortType } from '../../components/ui/SortButtonForTable/SortButtonForTable';

export interface IUser {
	name: string;
	surname: string;
	birthday: string;
	gender: string;
}

export interface IUserSort {
	nameSort?: ESortType;
	birthdaySort?: ESortType;
	genderSort?: ESortType;
}
