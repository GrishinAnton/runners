"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateGenerator = void 0;
const date_fns_1 = require("date-fns");
class DateGenerator {
    static getFormatISO(value) {
        const date = new Date(value);
        return (0, date_fns_1.formatISO)(date);
    }
    static getSecondsFromMinutes(value) {
        const partMinute = value.split(':');
        const leftPart = Number(partMinute[0]) * 60;
        const rightPart = Math.round(Number(partMinute[1]));
        return leftPart + rightPart;
    }
    static getMillisecondsFromMinutes(value) {
        const partMinute = value.split(':');
        const leftPart = Number(partMinute[0]) * 60 * 1000;
        const rightPart = partMinute[1].split('.');
        const rightPartSeconds = Number(rightPart[0]) * 1000;
        const rightPartMilliseconds = Number(rightPart[1]);
        return leftPart + rightPartSeconds + rightPartMilliseconds;
    }
}
exports.DateGenerator = DateGenerator;
//# sourceMappingURL=date.js.map