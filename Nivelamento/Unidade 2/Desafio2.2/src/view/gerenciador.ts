
import { sessionMoeda } from "../session/session";
import { Presenter } from "./presenter";
import { Receiver } from "./receiver";

class Gerenciador {

    private controllerMoeda = sessionMoeda;

    private output = new Presenter();
    private readUserLine = new Receiver();

    async run() {
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

            // consumir a API
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