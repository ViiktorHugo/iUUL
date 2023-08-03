
import { sessionMoeda } from "../session/session";
import { Presenter } from "./presenter";
import { Receiver } from "./receiver";

class Gerenciador {

    private controllerMoeda = sessionMoeda;

    private output = new Presenter();
    private readUserLine = new Receiver();

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

            // consumir a API
            // TODO -> Implementar o from e to da api, calcular a moedaDestinoValor e o valor da taxa
            
            this.output.showValorDestino(moedaOrigem.tipoMoeda, moedaOrigem.valorMoeda, moedaDestino.tipoMoeda, moedaDestino.valorMoeda);
            this.output.showTaxa();
            const taxa = this.output.showTaxa;
            this.output.pulaLinha();
            this.output.pulaLinha();
        }
    }
}

export {Gerenciador};