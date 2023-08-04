"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receiver = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
/**
 * @Author Victor Hugo
 * @description - Classe que cuida da entrada de dados do usuario
 */
class Receiver {
    /**
     * @description - Recebe a entrada para o tipo das moedas
     * @param input - tipo de moeda
     * @example: 'USD', 'BRL'
     */
    getStrInput(input) {
        return readline_sync_1.default.question(input);
    }
    /**
     * @description - Recebe a entrada para o valor das moedas
     * @param input - valor da moeda
     * @example: 1, 1000, 2050.30
     */
    getNumInput(input) {
        const initialInput = readline_sync_1.default.question(input);
        const finalInput = parseFloat(initialInput);
        return finalInput;
    }
}
exports.Receiver = Receiver;
