
class Consulta {
    #cpf;
    #data;
    #inicio;
    #fim;

    /**
     * 
     * @params cpf, data da consulta, horario incial, horario final.
     * 
     */
    constructor (cpf, data, inicio, fim) {
        this.#cpf = cpf;
        this.#data = data;
        this.#inicio = inicio;
        this.#fim = fim;
    }

    get dataConsulta() {
        return this.#data;
    }

    get inicioConsulta() {
        return this.#inicio;
    }

    get fimConsulta() {
        return this.#fim;
    }
}
