
/**
 * @Author Victor Hugo
 * @description Classe Moeda, representa uma instancia de um valor monetario.
 * @params tipo, valor
 */
class Moeda{
    #tipo: string;
    #valor: number;

    constructor(tipo: string, valor: number) {
        this.#tipo = tipo;
        this.#valor = valor;
    }

    get tipo() {
        return this.#tipo;
    }

    get valor() {
        return this.#valor;
    }

    set valor(novoValor: number) {
        this.#valor = novoValor;
    }
}

export {Moeda};