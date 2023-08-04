"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMoeda = void 0;
const controller_moeda_1 = require("../control/controller-moeda");
/**
 * @Author Victor Hugo
 * @description inicia uma sessão, do controller moeda.
 */
const sessionMoeda = new controller_moeda_1.ControllerMoeda();
exports.sessionMoeda = sessionMoeda;
