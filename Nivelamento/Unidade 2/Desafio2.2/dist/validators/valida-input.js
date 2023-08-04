"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidaInputs = void 0;
const presenter_1 = require("../view/presenter");
/**
 * @Author Victor Hugo
 * @description Classe para validar as entradas.
 */
class ValidaInputs {
    constructor() {
        this.output = new presenter_1.Presenter();
    }
    /**
     * @description - Verifica se a string é vazia, se for, encerra o programa.
     * @param input - tipo de moeda
     * @example: '' -> Erro. 'USD', 'BRL' -> validos
     */
    verificaStringVazia(input) {
        if (input == '') {
            this.output.pulaLinha();
            this.output.pulaLinha();
            process.exit();
        }
    }
    /**
     * @description - Verifica se a moeda possui exatamente 3 caracteres, encerra o programa caso nao
     * possua e imprime mensagem de erro.
     * @param input - tipo de moeda
     * @example: 'USDD' -> Erro. 'USD', 'BRL', 'EUR' -> validos
     */
    verificaCaracteres(input) {
        if (input.length !== 3) {
            this.output.pulaLinha();
            this.output.errorInputCaracteres();
            process.exit();
        }
    }
    /**
     * @description - Verifica se o valor da moeda eh maior que zero, encerra o programa caso seja menor
     * ou igual a zero e imprime mensagem de erro.
     * @param input - valor
     * @example: 0, -1000 -> Erro. 1, 1000, 1050.50 -> validos
     */
    verificaMaiorQueZero(input) {
        if (!(input > 0)) {
            this.output.pulaLinha();
            this.output.errorInputMenorQueZero();
            process.exit();
        }
    }
    /**
     * @description - Verifica se as moedas sao iguais, encerra o programa caso sejam
     * e imprime mensagem de erro.
     * @param input1 - tipo de moeda, @param input2 - tipo de moeda
     * @example: 0, -1000 -> Erro. 1, 1000, 1050.50 -> validos
     */
    verificaEhIgual(input1, input2) {
        if (input1 === input2) {
            this.output.pulaLinha();
            this.output.errorInputIguais();
            process.exit();
        }
    }
}
exports.ValidaInputs = ValidaInputs;
