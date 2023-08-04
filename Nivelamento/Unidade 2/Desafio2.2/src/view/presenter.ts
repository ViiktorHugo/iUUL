/**
 * @Author Victor Hugo
 * @description Classe que cuida da impressao dos dados
 */
class Presenter {

    showOrigem() {
        this.printData(`Digite a moeda de origem: `)
    }

    showDestino() {
        this.printData(`Digite a moeda de destino: `)
    }

    showValorOrigem() {
        this.printData(`Digite o valor: `)
    }

    showValorDestino(moedaOrigem: string, valorOrigem: number | undefined, moedaDestino: string, valorDestino: number | undefined) { //nao eh boa pratica, como melhorar?
        this.printData(
            `${moedaOrigem} ${valorOrigem} => ${moedaDestino} ${valorDestino}\n`
        )
    }

    showTaxa(taxa : number) {
        this.printData(`Taxa: ${taxa}`)
    }

    pulaLinha(){
        this.printData('\n')
    }

    // outputs para as validacoes
    errorInputCaracteres () {
        this.printData(`ERRO: Quantidade de caracteres invalidos, digite a moeda com apenas 3 caracteres!`);
    }

    errorInputIguais() {
        this.printData(`ERRO: A moeda de origem e a moeda de destino precisam ser diferentes!`)
    }

    errorInputMenorQueZero() {
        this.printData(`ERRO: O valor precisa ser maior do que zero!`)
    }

    private printData(data: string) {
        process.stdout.write(data);
    }
}

export {Presenter};