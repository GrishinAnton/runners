import { UserGender } from "@prisma/client";

export class UserCreateDto {
	name: string;
	surname: string;
	birthday: string;
	gender: UserGender;
}
