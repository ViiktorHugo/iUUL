const {DateTime} = require("luxon") //dar npm install no luxon, ver pagina da web


class Consulta {
    #cpf;
    #data;
    #inicio;
    #fim;
    #duracao;

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
        this.#duracao = this.#fim - this.#inicio;
    }

    get cpfConsulta() {
        return this.#cpf;
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

    get duracaoConsulta() {
        return this.#duracao;
    }
}

let a = DateTime.DATE_SHORT
console.log(a);

module.exports = {
    Consulta: Consulta
}
