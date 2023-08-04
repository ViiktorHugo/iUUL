
import { sessionMoeda } from "../session/session";
import { Presenter } from "../view/presenter";
import { Receiver } from "../view/receiver";
import { ValidaInputs } from "../validators/valida-input";

class Gerenciador {

    private controllerMoeda = sessionMoeda;
    private validador = new ValidaInputs();

    private output = new Presenter();
    private readUserLine = new Receiver();

    async run() {
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
            let taxa : number;

            try {
                const response = await fetch(consomeAPI);
                const data = await response.json();
                taxa = data.info.rate;
                moedaDestino.alteraValor = data.result.toFixed(2);

                this.output.showValorDestino(moedaOrigem.tipoMoeda, moedaOrigem.valorMoeda, moedaDestino.tipoMoeda, moedaDestino.valorMoeda);
                this.output.showTaxa(taxa);
                this.output.pulaLinha();
                this.output.pulaLinha();
            } catch (error) { // tratando erro de comunicacao com a API
                console.error('Error getting data: ', error);
            }
        }
    }
}

export {Gerenciador};