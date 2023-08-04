"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerenciador = void 0;
const session_1 = require("../session/session");
const presenter_1 = require("../view/presenter");
const receiver_1 = require("../view/receiver");
const valida_input_1 = require("../validators/valida-input");
class Gerenciador {
    constructor() {
        this.controllerMoeda = session_1.sessionMoeda;
        this.validador = new valida_input_1.ValidaInputs();
        this.output = new presenter_1.Presenter();
        this.readUserLine = new receiver_1.Receiver();
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                this.output.showOrigem();
                const origem = this.readUserLine.getStrInput('');
                this.validador.verificaStringVazia(origem); // verifica se eh string vazia
                this.validador.verificaCaracteres(origem); // verifica se possui 3 caracteres
                this.output.showDestino();
                const destino = this.readUserLine.getStrInput('');
                this.validador.verificaCaracteres(destino); // verifica se possui 3 caracteres
                this.validador.verificaEhIgual(origem, destino); // verifica se as moedas sao iguais
                this.output.showValorOrigem();
                const valorOrigem = this.readUserLine.getNumInput(''); // know ISSUE = Digitar com ',' ao invés de '.' gera saida indesejada.
                this.validador.verificaMaiorQueZero(valorOrigem); // verifica se eh maior que zero
                this.output.pulaLinha();
                let moedaOrigem = this.controllerMoeda.createMoeda(origem, valorOrigem);
                let moedaDestino = this.controllerMoeda.createMoeda(destino);
                // utilizando a API exchangerate
                const consomeAPI = `https://api.exchangerate.host/convert?from=${moedaOrigem.tipoMoeda}&to=${moedaDestino.tipoMoeda}&amount=${moedaOrigem.valorMoeda}`;
                let taxa;
                try {
                    const response = yield fetch(consomeAPI);
                    const data = yield response.json();
                    taxa = data.info.rate;
                    moedaDestino.alteraValor = data.result.toFixed(2);
                    this.output.showValorDestino(moedaOrigem.tipoMoeda, moedaOrigem.valorMoeda, moedaDestino.tipoMoeda, moedaDestino.valorMoeda);
                    this.output.showTaxa(taxa);
                    this.output.pulaLinha();
                    this.output.pulaLinha();
                }
                catch (error) { // tratando erro de comunicacao com a API
                    console.error('Error getting data: ', error);
                }
            }
        });
    }
}
exports.Gerenciador = Gerenciador;
