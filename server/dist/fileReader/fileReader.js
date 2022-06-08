"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
const node_xlsx_1 = __importDefault(require("node-xlsx"));
class FileReader {
    constructor(file) {
        this.file = file;
    }
    getData() {
        const obj = node_xlsx_1.default.parse(this.file, { raw: false });
        const rows = [];
        for (let i = 0; i < obj.length; i++) {
            const sheet = obj[i];
            for (let j = 0; j < sheet['data'].length; j++) {
                const data = sheet['data'];
                rows.push(data[j]);
            }
        }
        return rows;
    }
}
exports.FileReader = FileReader;
//# sourceMappingURL=fileReader.js.map