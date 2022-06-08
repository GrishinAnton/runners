"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Distance = void 0;
const date_1 = require("../common/date");
class Distance {
    constructor(_time, _date, _distance, _userId, _stageId) {
        this._time = _time;
        this._date = _date;
        this._distance = _distance;
        this._userId = _userId;
        this._stageId = _stageId;
    }
    get time() {
        const milliseconds = date_1.DateGenerator.getMillisecondsFromMinutes(this._time);
        return milliseconds;
    }
    get date() {
        return this._date;
    }
    get distance() {
        return this._distance;
    }
    get temp() {
        const seconds = date_1.DateGenerator.getSecondsFromMinutes(this._time);
        const kmFromMeters = this._distance / 1000;
        const tempSKm = seconds / kmFromMeters;
        return Math.floor(tempSKm);
    }
    get userId() {
        return this._userId;
    }
    get stageId() {
        return this._stageId;
    }
}
exports.Distance = Distance;
//# sourceMappingURL=distance.entity.js.map