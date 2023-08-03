"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
/**
 * @Author Victor Hugo
 * @description Classe que cuida apenas da interface na linha de comando
 */
class Presenter {
    showOrigem() {
        this.printData(`Digite a moeda de origem: `);
    }
    showDestino() {
        this.printData(`Digite a moeda de destino: `);
    }
    showValorOrigem() {
        this.printData(`Digite o valor: `);
    }
    showValorDestino(moedaOrigem, valorOrigem, moedaDestino, valorDestino) {
        this.printData(`${moedaOrigem} ${valorOrigem} => ${moedaDestino} ${valorDestino}\n`);
    }
    showTaxa() {
        this.printData(`Taxa: `);
    }
    pulaLinha() {
        this.printData('\n');
    }
    printData(data) {
        process.stdout.write(data);
    }
}
exports.Presenter = Presenter;
