"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
/**
 * @Author Victor Hugo
 * @description Classe que cuida da impressao dos dados
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
    showTaxa(taxa) {
        this.printData(`Taxa: ${taxa}`);
    }
    pulaLinha() {
        this.printData('\n');
    }
    // outputs para as validacoes
    errorInputCaracteres() {
        this.printData(`ERRO: Quantidade de caracteres invalidos, digite a moeda com apenas 3 caracteres!`);
    }
    errorInputIguais() {
        this.printData(`ERRO: A moeda de origem e a moeda de destino precisam ser diferentes!`);
    }
    errorInputMenorQueZero() {
        this.printData(`ERRO: O valor precisa ser maior do que zero!`);
    }
    printData(data) {
        process.stdout.write(data);
    }
}
exports.Presenter = Presenter;
