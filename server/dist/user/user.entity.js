"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(_name, _surname, _birthday, _gender) {
        this._name = _name;
        this._surname = _surname;
        this._birthday = _birthday;
        this._gender = _gender;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get surname() {
        return this._surname;
    }
    set surname(value) {
        this._surname = value;
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(value) {
        this._birthday = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map