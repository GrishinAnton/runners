"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileChanker = exports.ECollect = void 0;
const date_1 = require("../date");
var ECollect;
(function (ECollect) {
    ECollect["MALE"] = "male";
    ECollect["FEMALE"] = "female";
})(ECollect = exports.ECollect || (exports.ECollect = {}));
const defaultCollect = {
    [ECollect.MALE]: [],
    [ECollect.FEMALE]: [],
};
class FileChanker {
    constructor(rows) {
        this.rows = rows;
        this.chanks = [];
        this.clearedChanks = [];
        this.collectObj = defaultCollect;
    }
    chank() {
        var _a;
        let chank = [];
        for (let i = 0; i < this.rows.length; i++) {
            chank.push(this.rows[i]);
            if (!((_a = this.rows[i + 1]) === null || _a === void 0 ? void 0 : _a.length)) {
                this.chanks.push(chank);
                chank = [];
            }
        }
    }
    clearEmpty() {
        const chanks = [...this.chanks];
        const clear = (arr) => {
            const result = [];
            arr.forEach((item) => {
                if (Array.isArray(item) && item.length) {
                    result.push(clear(item));
                }
                else if (item === null || item === void 0 ? void 0 : item.length) {
                    result.push(item);
                }
            });
            return result;
        };
        this.clearedChanks = chanks.map((chank) => clear(chank));
    }
    collect() {
        this.clearedChanks.forEach((chank, index) => {
            if (index === 1) {
                this.collectObj[ECollect.MALE] = chank.slice(1, chank.length);
            }
            if (index === 3) {
                this.collectObj[ECollect.FEMALE] = chank.slice(1, chank.length - 1);
            }
        });
    }
    getChankData() {
        this.chank();
        this.clearEmpty();
        this.collect();
        return this.collectObj;
    }
    static getRunner(runner) {
        const defaultUser = {
            name: '',
            surname: '',
            birthday: '',
        };
        if (runner.length) {
            try {
                const date = runner[2];
                defaultUser['name'] = runner[1].split(' ')[1] || '';
                defaultUser['surname'] = runner[1].split(' ')[0] || '';
                defaultUser['birthday'] = date
                    ? date_1.DateGenerator.getFormatISO(date)
                    : date_1.DateGenerator.getFormatISO(new Date().toISOString());
                return defaultUser;
            }
            catch (e) {
                console.log(e);
                return null;
            }
        }
        return null;
    }
    static getDictance(distance) {
        const defaultDictance = {
            time: '0',
        };
        if (distance.length) {
            try {
                defaultDictance['time'] = distance[3] || '0';
                return defaultDictance;
            }
            catch (e) {
                console.log(e);
                return null;
            }
        }
        return null;
    }
}
exports.FileChanker = FileChanker;
//# sourceMappingURL=fileChanker.service.js.map