
/**
 * @Author Victor Hugo
 * @description Classe Moeda, representa uma instancia de um valor monetario.
 * @params tipo, valor
 */
class Moeda{
    private tipo : string;
    private valor ?: number; //campo opcional

    constructor(tipo : string, valor ?: number) {
        this.tipo = tipo;
        this.valor = valor;
    }

    get tipoMoeda() : string {
        return this.tipo;
    }

    get valorMoeda() : number | undefined {
        return this.valor;
    }

    set alteraValor(novoValor: number){
        this.valor = novoValor;
    }
}

export {Moeda};