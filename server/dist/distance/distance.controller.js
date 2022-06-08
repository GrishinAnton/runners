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
exports.DistanceController = void 0;
const inversify_1 = require("inversify");
const base_controller_1 = require("../common/base.controller");
const types_1 = require("../types");
require("reflect-metadata");
let DistanceController = class DistanceController extends base_controller_1.BaseController {
    constructor(logger, distanceService) {
        super(logger);
        this.logger = logger;
        this.distanceService = distanceService;
        this.bindRoutes([
            {
                path: '/create',
                method: 'post',
                func: this.createDistance,
            },
            {
                path: '/',
                method: 'get',
                func: this.getDistance,
            },
        ]);
    }
    createDistance({ body }, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.distanceService.createDistance(body);
            this.ok(res, result);
        });
    }
    getDistance({ query }, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const stageId = query.stageId;
            if (!stageId) {
                this.ok(res, 'Вы не передали stageId');
                return;
            }
            const result = yield this.distanceService.getDistance(stageId);
            this.ok(res, result);
        });
    }
};
DistanceController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.LoggerService)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.DistanceService)),
    __metadata("design:paramtypes", [Object, Object])
], DistanceController);
exports.DistanceController = DistanceController;
//# sourceMappingURL=distance.controller.js.map