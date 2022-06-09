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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const inversify_1 = require("inversify");
const body_parser_1 = require("body-parser");
const prisma_service_1 = require("./database/prisma.service");
const types_1 = require("./types");
require("reflect-metadata");
const competition_controller_1 = require("./competition/competition.controller");
const stage_controller_1 = require("./stage/stage.controller");
const user_controller_1 = require("./user/user.controller");
const distance_controller_1 = require("./distance/distance.controller");
const race_controller_1 = require("./race/race.controller");
const fileUpload_service_1 = require("./common/fileUpload.service");
const statistic_controller_1 = require("./statistic/statistic.controller");
const cors_1 = __importDefault(require("cors"));
let App = class App {
    constructor(prismaService, logger, competitionController, stageController, userController, distanceController, raceController, statisticController) {
        this.prismaService = prismaService;
        this.logger = logger;
        this.competitionController = competitionController;
        this.stageController = stageController;
        this.userController = userController;
        this.distanceController = distanceController;
        this.raceController = raceController;
        this.statisticController = statisticController;
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT) || 5000;
    }
    useMiddleware() {
        this.app.use((0, body_parser_1.json)());
        this.app.use(fileUpload_service_1.uploadMiddleware);
        this.app.use((0, cors_1.default)());
    }
    useRoutes() {
        this.app.use('/competition', this.competitionController.router);
        this.app.use('/stage', this.stageController.router);
        this.app.use('/user', this.userController.router);
        this.app.use('/distance', this.distanceController.router);
        this.app.use('/race', this.raceController.router);
        this.app.use('/statistic', this.statisticController.router);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.useMiddleware();
            this.useRoutes();
            yield this.prismaService.connectDB();
            this.app.listen(this.port);
            this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
        });
    }
    close() {
        this.server.close();
    }
};
App = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.PrismaService)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.LoggerService)),
    __param(2, (0, inversify_1.inject)(types_1.TYPES.CompetitionController)),
    __param(3, (0, inversify_1.inject)(types_1.TYPES.StageController)),
    __param(4, (0, inversify_1.inject)(types_1.TYPES.UserController)),
    __param(5, (0, inversify_1.inject)(types_1.TYPES.DistanceController)),
    __param(6, (0, inversify_1.inject)(types_1.TYPES.RaceController)),
    __param(7, (0, inversify_1.inject)(types_1.TYPES.StatisticController)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object, competition_controller_1.CompetitionController,
        stage_controller_1.StageController,
        user_controller_1.UserController,
        distance_controller_1.DistanceController,
        race_controller_1.RaceController,
        statistic_controller_1.StatisticController])
], App);
exports.App = App;
//# sourceMappingURL=app.js.map