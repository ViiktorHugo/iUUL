"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moeda = void 0;
/**
 * @Author Victor Hugo
 * @description Classe Moeda, representa uma instancia de um valor monetario.
 * @params tipo, valor
 */
class Moeda {
    constructor(tipo, valor) {
        this.tipo = tipo;
        this.valor = valor;
    }
    get tipoMoeda() {
        return this.tipo;
    }
    get valorMoeda() {
        return this.valor;
    }
    set alteraValor(novoValor) {
        this.valor = novoValor;
    }
}
exports.Moeda = Moeda;
