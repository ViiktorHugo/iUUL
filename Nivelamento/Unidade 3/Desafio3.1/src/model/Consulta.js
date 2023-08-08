
class Consulta {
    #cpf; // verificar se isso deve ser substituido por paciente. faz mais sentido???
    #data;
    #inicio;
    #fim;
    #duracao;

    /**
     * Cria uma nova consulta.
     * 
     * @params cpf, data da consulta, horario incial, horario final
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

module.exports = {
    Consulta: Consulta
}
