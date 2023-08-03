"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receiver = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
class Receiver {
    getStrInput(input) {
        return readline_sync_1.default.question(input);
    }
    getNumInput(input) {
        const initialInput = readline_sync_1.default.question(input);
        const finalInput = parseFloat(initialInput);
        return finalInput;
    }
}
exports.Receiver = Receiver;
