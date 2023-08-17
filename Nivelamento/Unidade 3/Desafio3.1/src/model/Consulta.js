
/**
 * @description classe Consulta
 */
class Consulta {
    #cpf; 
    #data;
    #inicio;
    #fim;
    #duracao;

    /**
     * Cria uma nova consulta.
     * @params cpf, data da consulta, horario incial, horario final
     */
    constructor (cpf, data, inicio, fim) {
        this.#cpf = cpf;
        this.#data = data;
        this.#inicio = inicio;
        this.#fim = fim;
        this.#duracao = this.#fim - this.#inicio;
    }

    get cpf() {
        return this.#cpf;
    }

    get data() {
        return this.#data;
    }

    get inicio() {
        return this.#inicio;
    }

    get fim() {
        return this.#fim;
    }

    get duracao() {
        return this.#duracao;
    }
}

module.exports = Consulta;
