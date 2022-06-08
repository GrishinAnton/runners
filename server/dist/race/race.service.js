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
exports.RaceService = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const fileChanker_service_1 = require("../common/fileReader/fileChanker.service");
const fileReader_service_1 = require("../common/fileReader/fileReader.service");
const distance_service_1 = require("../distance/distance.service");
const types_1 = require("../types");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
let RaceService = class RaceService {
    constructor(fileReaderService, userService, distanceService) {
        this.fileReaderService = fileReaderService;
        this.userService = userService;
        this.distanceService = distanceService;
    }
    createRaceFromFile({ file, stageId, date, distance, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = this.fileReaderService.getData(file);
            const collection = new fileChanker_service_1.FileChanker(data);
            const collectionUsers = collection.getChankData();
            const collectionUsersMan = collectionUsers[fileChanker_service_1.ECollect.MALE];
            const collectionUsersWomen = collectionUsers[fileChanker_service_1.ECollect.FEMALE];
            yield this.createDistance(collectionUsersMan, fileChanker_service_1.ECollect.MALE, date, distance, stageId);
            yield this.createDistance(collectionUsersWomen, fileChanker_service_1.ECollect.FEMALE, date, distance, stageId);
        });
    }
    createDistance(users, gender, date, distance, stageId) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                const currentUser = fileChanker_service_1.FileChanker.getRunner(user);
                const currentDistance = fileChanker_service_1.FileChanker.getDictance(user);
                if (currentUser && currentDistance) {
                    const currentClassUser = new user_entity_1.User(currentUser.name, currentUser.surname, currentUser.birthday, gender);
                    const findingOrCreatedUser = yield this.userService.findOrCreateUser(currentClassUser);
                    const distanceEntity = {
                        time: currentDistance.time,
                        date,
                        distance,
                        userId: findingOrCreatedUser.id,
                        stageId,
                    };
                    yield this.distanceService.createDistance(distanceEntity);
                }
            }
        });
    }
};
RaceService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.FileReaderService)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.UserService)),
    __param(2, (0, inversify_1.inject)(types_1.TYPES.DistanceService)),
    __metadata("design:paramtypes", [fileReader_service_1.FileReaderService,
        user_service_1.UserService,
        distance_service_1.DistanceService])
], RaceService);
exports.RaceService = RaceService;
//# sourceMappingURL=race.service.js.map