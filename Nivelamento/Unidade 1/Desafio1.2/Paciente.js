
class Paciente {
    #cpf;
    #nome;
    #nascimento;
    #idade;
    #consultas; // verificar coesao e dependencias com o objeto consulta.js

    /**
     * @params cpf, nome e data de nascimento
     */
    constructor (cpf, nome, nascimento) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#nascimento = nascimento;
        this.#idade = 0; // TODO: data de nascimento - data atual
        this.#consultas = [];
    }

    get cpfPaciente() {
        return this.#cpf;
    }

    get nomePaciente() {
        return this.#nome;
    }

    get nascimentoPaciente() {
        return this.#nascimento;
    }

    get idadePaciente() {
        return this.#idade;
    }

    /**
     * Funcao que verifica se o CPF ja eh existente
     * @param outro CPF
     * @returns true -> caso exista, false -> nao exista
     * TODO: Verificar se o paciente eh responsavel por realizar essa verificacao
     */
    verificaCPF (otherCPF) {
        return this.#cpf === otherCPF;
    }
}

module.exports = {
    Paciente: Paciente
}
