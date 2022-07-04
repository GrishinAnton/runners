import { UserGender } from "@prisma/client";

export interface IUser {
	id: number;
	name: string;
	surname: string;
	birthday: string;
	gender: UserGender;
}