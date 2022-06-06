import { ESortType } from '../../components/ui/SortButtonForTable/SortButtonForTable';
import { EGender } from '../distance/distance.interfasce';

export interface IUser {
	name: string;
	surname: string;
	birthday: string;
	gender: EGender;
}

export interface IUserSort {
	nameSort?: ESortType;
	birthdaySort?: ESortType;
	genderSort?: ESortType;
}
