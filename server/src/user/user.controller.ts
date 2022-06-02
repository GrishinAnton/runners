import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { ILoggerService } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';
import { IUserService } from './user.service.interface';
import { UserCreateDto } from './dto/user-create.dto';
import { IUserController } from './user.controller.interface';
import { IUserSort } from './user.repositoty.interface';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(
		@inject(TYPES.LoggerService) protected logger: ILoggerService,
		@inject(TYPES.UserService) private userService: IUserService,
	) {
		super(logger);

		this.bindRoutes([
			{
				path: '/create',
				method: 'post',
				func: this.createUser,
			},
			{
				path: '/current',
				method: 'get',
				func: this.getUser,
			},
			{
				path: '/',
				method: 'get',
				func: this.getUsers,
			},
		]);
	}

	async createUser(
		{ body }: Request<{}, {}, UserCreateDto>,
		res: Response,
		next: NextFunction,
	): Promise<void | Error> {
		const result = await this.userService.createUser(body);
		if (!result) {
			this.send(res, 422, 'Такой юзер уже существует');
			return;
		}
		this.ok(res, result);
	}

	async getUser(
		{ body }: Request<{}, {}, UserCreateDto>,
		res: Response,
		next: NextFunction,
	): Promise<void | Error> {
		const result = await this.userService.getUser(body);
		this.ok(res, result);
	}

	async getUsers(
		{ query }: Request<{}, {}, {}, IUserSort>,
		res: Response,
		next: NextFunction,
	): Promise<void | Error> {
		const result = await this.userService.getUsers({
			surnameSort: query.surnameSort,
			birthdaySort: query.birthdaySort,
			genderSort: query.genderSort,
		});
		this.ok(res, result);
	}
}
