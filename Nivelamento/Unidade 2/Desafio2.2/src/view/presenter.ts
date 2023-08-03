/**
 * @Author Victor Hugo
 * @description Classe que cuida apenas da interface na linha de comando
 */
class Presenter {

    showOrigem() {
        this.printData(
            `Digite a moeda de origem: `
        )
    }

    showDestino() {
        this.printData(
            `Digite a moeda de destino: `
        )
    }

    showValorOrigem() {
        this.printData(
            `Digite o valor: `
        )
    }

    showValorDestino(moedaOrigem: string, valorOrigem: number | undefined, moedaDestino: string, valorDestino: number | undefined) { //nao eh boa pratica, como melhorar?
        this.printData(
            `${moedaOrigem} ${valorOrigem} => ${moedaDestino} ${valorDestino}\n`
        )
    }

    showTaxa() {
        this.printData(
            `Taxa: `
        )
    }

    pulaLinha(){
        this.printData(
            '\n'
        )
    }

    private printData(data: string) {
        process.stdout.write(data);
    }
}

export {Presenter};