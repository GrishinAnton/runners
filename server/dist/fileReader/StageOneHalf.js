"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageOneHalf = void 0;
var ECollect;
(function (ECollect) {
    ECollect["MAN"] = "man";
    ECollect["WOMEN"] = "women";
})(ECollect || (ECollect = {}));
const defaultCollect = {
    [ECollect.MAN]: [],
    [ECollect.WOMEN]: [],
};
class StageOneHalf {
    constructor(rows) {
        this.chanks = [];
        this.clearedChanks = [];
        this.collectObj = defaultCollect;
        this.rows = rows;
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
                this.collectObj[ECollect.MAN] = chank.slice(1, chank.length - 1);
            }
            if (index === 3) {
                this.collectObj[ECollect.WOMEN] = chank.slice(1, chank.length - 2);
            }
        });
    }
    getRunner(runner) {
        const result = {
            name: '',
            surname: '',
            birthday: '',
        };
        if (runner.length) {
            try {
                result['name'] = runner[1].split(' ')[1] || '';
                result['surname'] = runner[1].split(' ')[0] || '';
                result['birthday'] = runner[2] || '';
                return result;
            }
            catch (e) {
                console.log(e);
                return null;
            }
        }
        return null;
    }
}
exports.StageOneHalf = StageOneHalf;
//# sourceMappingURL=StageOneHalf.js.map