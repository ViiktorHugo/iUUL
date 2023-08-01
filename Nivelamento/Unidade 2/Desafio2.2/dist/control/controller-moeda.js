"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerMoeda = void 0;
const moeda_1 = require("../model/moeda");
/**
 * @Author Victor Hugo
 * @description Controlador responsavel por criar uma nova instancia de moeda
 */
class ControllerMoeda {
    constructor() { }
    createMoeda(tipo, valor) {
        return new moeda_1.Moeda(tipo, valor);
    }
}
exports.ControllerMoeda = ControllerMoeda;
