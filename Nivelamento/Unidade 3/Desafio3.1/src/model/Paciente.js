
const { DateTime } = require('luxon');

class Paciente {
    #cpf;
    #nome;
    #nascimento;
    #idade;

    /**
     * Cria um novo paciente.
     * 
     * @params CPF, nome e data de nascimento
     */
    constructor (cpf, nome, nascimento) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#nascimento = nascimento;
        this.#idade = this.#calculaIdade(nascimento);
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
     * Verifica se o CPF ja eh existente.
     * 
     * @params CPF de outro paciente a ser comparado
     * @returns true -> caso exista igual, false -> nao exista
     * TODO: Verificar se o paciente eh responsavel por realizar essa verificacao
     */
    verificaCPF (otherCPF) {
        return this.#cpf === otherCPF;
    }

    /**
     * Metodo privado para calcular a idade no constructor
     * 
     * @params data de nascimento
     * @returns idade do paciente
     */
    #calculaIdade(nascimento) {
        let dataAtual = DateTime.now();

        let idade = dataAtual.diff(nascimento, 'years').years;

        return (idade);
    }
}

module.exports = {
    Paciente: Paciente
}
