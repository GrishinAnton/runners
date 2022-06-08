"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Race = void 0;
class Race {
    constructor(_file, _date, _distance, _stageId, _competitionId) {
        this._file = _file;
        this._date = _date;
        this._distance = _distance;
        this._stageId = _stageId;
        this._competitionId = _competitionId;
    }
    get file() {
        return this._file;
    }
    get stageId() {
        return this._stageId || null;
    }
    get competitionId() {
        return this._competitionId || null;
    }
    get date() {
        return this._date;
    }
    get distance() {
        return this._distance;
    }
}
exports.Race = Race;
//# sourceMappingURL=race.entity.js.map