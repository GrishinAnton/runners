"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticRepository = void 0;
const client_1 = require("@prisma/client");
const inversify_1 = require("inversify");
const prisma_service_1 = require("../database/prisma.service");
const types_1 = require("../types");
require("reflect-metadata");
let StatisticRepository = class StatisticRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getCompetitionStatistic(competitonId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [stageCount] = yield this.prismaService.client.$queryRaw(client_1.Prisma.sql `SELECT COUNT(*) as "stageCount" FROM stagemodel WHERE competitionid = ${competitonId};`);
            const [userCount] = yield this.prismaService.client.$queryRaw(client_1.Prisma.sql `SELECT COUNT(DISTINCT(userid)) as "userCount"
			FROM competitionmodel cm
				INNER JOIN
				 stagemodel sm ON cm.id = sm.competitionid
				INNER JOIN
				 distancemodel dm ON sm.id = dm.stageid
				INNER JOIN
					usermodel um ON dm.userid = um.id
			WHERE competitionid = ${competitonId};`);
            const [male, female] = yield this.prismaService.client.$queryRaw(client_1.Prisma.sql `SELECT DISTINCT COUNT(f.gender) OVER(PARTITION BY f.gender) as "genderCount", f.gender
			FROM (
				SELECT um.id, um.gender
				FROM competitionmodel cm
				INNER JOIN
					stagemodel sm ON cm.id = sm.competitionid
				INNER JOIN
					distancemodel dm ON sm.id = dm.stageid
				INNER JOIN
					usermodel um ON dm.userid = um.id
				WHERE competitionid = ${competitonId}
				GROUP BY um.id, um.gender
			) as f
			ORDER BY gender DESC;`);
            const [ageCampare] = yield this.prismaService.client.$queryRaw(client_1.Prisma.sql `SELECT MIN(DATE(um.birthday)) as oldest, MAX(DATE(um.birthday)) as youngest
			FROM competitionmodel cm
			INNER JOIN
				stagemodel sm ON cm.id = sm.competitionid
			INNER JOIN
				distancemodel dm ON sm.id = dm.stageid
			INNER JOIN
				usermodel um ON dm.userid = um.id
			WHERE competitionid = ${competitonId};`);
            const [tempCampare] = yield this.prismaService.client.$queryRaw(client_1.Prisma.sql `SELECT MIN(dm.temp) as fast, MAX(dm.temp) as slow
			FROM competitionmodel cm
			INNER JOIN
				stagemodel sm ON cm.id = sm.competitionid
			INNER JOIN
				distancemodel dm ON sm.id = dm.stageid
			WHERE competitionid = ${competitonId};`);
            const [timeCampare] = yield this.prismaService.client.$queryRaw(client_1.Prisma.sql `SELECT MIN(dm.time) as fast, MAX(dm.time) as slow
			FROM competitionmodel cm
			INNER JOIN
				stagemodel sm ON cm.id = sm.competitionid
			INNER JOIN
				distancemodel dm ON sm.id = dm.stageid
			WHERE competitionid = ${competitonId};`);
            const [distanceRun] = yield this.prismaService.client.$queryRaw(client_1.Prisma.sql `SELECT SUM(dm.distance) as "distanceRun"
			FROM competitionmodel cm
			INNER JOIN
				stagemodel sm ON cm.id = sm.competitionid
			INNER JOIN
				distancemodel dm ON sm.id = dm.stageid
			WHERE competitionid = ${competitonId};`);
            const [fastest] = yield this.prismaService.client.$queryRaw(client_1.Prisma.sql `SELECT MIN(dm.temp) as temp, dm.time, um.name, um.surname
			FROM competitionmodel cm
			INNER JOIN
				stagemodel sm ON cm.id = sm.competitionid
			INNER JOIN
				distancemodel dm ON sm.id = dm.stageid
			INNER JOIN
				usermodel um ON dm.userid = um.id
			WHERE competitionid = ${competitonId}
			GROUP BY
				temp, dm.time, um.name, um.surname;`);
            return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, stageCount), userCount), { sex: {
                    male,
                    female,
                }, ageCampare,
                tempCampare,
                timeCampare }), distanceRun), { fastest });
        });
    }
    getUserStatistic(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.prismaService.client.$queryRaw(client_1.Prisma.sql `SELECT sm.name as "stageName", sm.id as "stageId", dm.time as "distanceTime", dm.temp as "distanceTemp"
		FROM distancemodel dm
		INNER JOIN 
			stagemodel sm ON dm.stageid = sm.id
		INNER JOIN
			competitionmodel cm ON sm.competitionid = cm.id
		WHERE userid = ${userId}
		ORDER BY stageid ASC;`);
            return result;
        });
    }
};
StatisticRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.PrismaService)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StatisticRepository);
exports.StatisticRepository = StatisticRepository;
//# sourceMappingURL=statistic.repository.js.map