"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerenciador = void 0;
const session_1 = require("../session/session");
const presenter_1 = require("./presenter");
const receiver_1 = require("./receiver");
class Gerenciador {
    constructor() {
        this.controllerMoeda = session_1.sessionMoeda;
        this.output = new presenter_1.Presenter();
        this.readUserLine = new receiver_1.Receiver();
    }
    run() {
        while (true) {
            this.output.showOrigem();
            const origem = this.readUserLine.getStrInput('');
            if (origem == "") {
                process.exit();
            }
            this.output.showDestino();
            const destino = this.readUserLine.getStrInput('');
            this.output.showValorOrigem();
            const valorOrigem = this.readUserLine.getNumInput('');
            this.output.pulaLinha();
            let moedaOrigem = this.controllerMoeda.createMoeda(origem, valorOrigem);
            let moedaDestino = this.controllerMoeda.createMoeda(destino);
            // consome a API
            // TODO -> Implementar o from e to da api, calcular a moedaDestinoValor e o valor da taxa
            this.output.showValorDestino(moedaOrigem.tipoMoeda, moedaOrigem.valorMoeda, moedaDestino.tipoMoeda, moedaDestino.valorMoeda);
            this.output.showTaxa();
            const taxa = this.output.showTaxa;
            this.output.pulaLinha();
            this.output.pulaLinha();
        }
    }
}
exports.Gerenciador = Gerenciador;
