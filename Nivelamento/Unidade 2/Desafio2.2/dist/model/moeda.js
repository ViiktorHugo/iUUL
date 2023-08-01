"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Moeda_tipo, _Moeda_valor;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moeda = void 0;
/**
 * @Author Victor Hugo
 * @description Classe Moeda, representa uma instancia de um valor monetario.
 * @params tipo, valor
 */
class Moeda {
    constructor(tipo, valor) {
        _Moeda_tipo.set(this, void 0);
        _Moeda_valor.set(this, void 0);
        __classPrivateFieldSet(this, _Moeda_tipo, tipo, "f");
        __classPrivateFieldSet(this, _Moeda_valor, valor, "f");
    }
    get tipo() {
        return __classPrivateFieldGet(this, _Moeda_tipo, "f");
    }
    get valor() {
        return __classPrivateFieldGet(this, _Moeda_valor, "f");
    }
    set valor(novoValor) {
        __classPrivateFieldSet(this, _Moeda_valor, novoValor, "f");
    }
}
exports.Moeda = Moeda;
_Moeda_tipo = new WeakMap(), _Moeda_valor = new WeakMap();
