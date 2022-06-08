"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = void 0;
class Stage {
    constructor(_name, _date, _competitionId) {
        this._name = _name;
        this._date = _date;
        this._competitionId = _competitionId;
    }
    get name() {
        return this._name;
    }
    get date() {
        return this._date;
    }
    get competitionId() {
        return this._competitionId;
    }
}
exports.Stage = Stage;
//# sourceMappingURL=stage.entity.js.map