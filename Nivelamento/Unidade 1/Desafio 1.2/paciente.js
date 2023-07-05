
class Paciente {
    #cpf;
    #nome;
    #nascimento;

    /**
     * @params {*} cpf, nome e data de nascimento
     */
    constructor (cpf, nome, nascimento) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#nascimento = nascimento;
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

    /**
     * 
     * @param {*} CPF de outro paciente a ser comparado 
     * @returns true caso seja igual, false caso seja diferente
     */
    verificaCPF (otherCPF) {
        return this.#cpf === otherCPF;
    }
}

module.exports = {
    Paciente: Paciente
}