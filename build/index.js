"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
function test() {
    var keys = lodash_1.default.keys({ a: 1, b: 3 });
    return keys;
}
exports.default = test;
