"use strict";
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
exports.boot = exports.appBindings = void 0;
const inversify_1 = require("inversify");
const app_1 = require("./app");
const fileReader_service_1 = require("./common/fileReader/fileReader.service");
const competition_controller_1 = require("./competition/competition.controller");
const competition_repository_1 = require("./competition/competition.repository");
const competition_service_1 = require("./competition/competition.service");
const prisma_service_1 = require("./database/prisma.service");
const distance_controller_1 = require("./distance/distance.controller");
const distance_repository_1 = require("./distance/distance.repository");
const distance_service_1 = require("./distance/distance.service");
const logger_service_1 = require("./logger/logger.service");
const race_controller_1 = require("./race/race.controller");
const race_service_1 = require("./race/race.service");
const stage_controller_1 = require("./stage/stage.controller");
const stage_repository_1 = require("./stage/stage.repository");
const stage_service_1 = require("./stage/stage.service");
const statistic_controller_1 = require("./statistic/statistic.controller");
const statistic_repository_1 = require("./statistic/statistic.repository");
const statistic_service_1 = require("./statistic/statistic.service");
const types_1 = require("./types");
const user_controller_1 = require("./user/user.controller");
const user_repository_1 = require("./user/user.repository");
const user_service_1 = require("./user/user.service");
exports.appBindings = new inversify_1.ContainerModule((bind) => {
    bind(types_1.TYPES.Application).to(app_1.App);
    bind(types_1.TYPES.PrismaService).to(prisma_service_1.PrismaService).inSingletonScope();
    bind(types_1.TYPES.LoggerService).to(logger_service_1.LoggerService).inSingletonScope();
    bind(types_1.TYPES.CompetitionController).to(competition_controller_1.CompetitionController);
    bind(types_1.TYPES.CompetitionService).to(competition_service_1.CompetitionService);
    bind(types_1.TYPES.CompetitionRepository).to(competition_repository_1.CompetitionRepository);
    bind(types_1.TYPES.StageController).to(stage_controller_1.StageController);
    bind(types_1.TYPES.StageService).to(stage_service_1.StageService);
    bind(types_1.TYPES.StageRepository).to(stage_repository_1.StageRepository);
    bind(types_1.TYPES.UserController).to(user_controller_1.UserController);
    bind(types_1.TYPES.UserService).to(user_service_1.UserService);
    bind(types_1.TYPES.UserRepository).to(user_repository_1.UserRepository);
    bind(types_1.TYPES.DistanceController).to(distance_controller_1.DistanceController);
    bind(types_1.TYPES.DistanceService).to(distance_service_1.DistanceService);
    bind(types_1.TYPES.DistanceRepository).to(distance_repository_1.DistanceRepository);
    bind(types_1.TYPES.RaceController).to(race_controller_1.RaceController);
    bind(types_1.TYPES.RaceService).to(race_service_1.RaceService);
    bind(types_1.TYPES.FileReaderService).to(fileReader_service_1.FileReaderService);
    bind(types_1.TYPES.StatisticService).to(statistic_service_1.StatisticService);
    bind(types_1.TYPES.StatisticRepository).to(statistic_repository_1.StatisticRepository);
    bind(types_1.TYPES.StatisticController).to(statistic_controller_1.StatisticController);
});
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const appContainer = new inversify_1.Container();
        appContainer.load(exports.appBindings);
        const app = appContainer.get(types_1.TYPES.Application);
        yield app.init();
        return { appContainer, app };
    });
}
exports.boot = bootstrap();
//# sourceMappingURL=main.js.map