"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competition = void 0;
class Competition {
    constructor(_name, _startDate, _endDate) {
        this._name = _name;
        this._startDate = _startDate;
        this._endDate = _endDate;
    }
    get name() {
        return this._name;
    }
    get startDate() {
        return this._startDate;
    }
    get endDate() {
        return this._endDate || null;
    }
}
exports.Competition = Competition;
//# sourceMappingURL=competition.entity.js.map