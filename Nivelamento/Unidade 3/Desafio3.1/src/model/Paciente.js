

const { DateTime } = require('luxon');

/**
 * @description classe paciente
 */
class Paciente {
    #cpf;
    #nome;
    #nascimento;
    #idade;

    /**
     * @description Cria um novo paciente.
     * @params CPF, nome e data de nascimento
     */
    constructor (cpf, nome, nascimento) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#nascimento = nascimento;
        this.#idade = this.#calculaIdade(nascimento);
    }

    get cpf() {
        return this.#cpf;
    }

    get nome() {
        return this.#nome;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get idade() {
        return this.#idade;
    }

    /**
     * Verifica se o CPF ja eh existente.
     * 
     * @params CPF de outro paciente a ser comparado
     * @returns true -> caso exista igual, false -> nao exista
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
        let dataNascimento = DateTime.fromFormat(nascimento, 'dd/MM/yyyy', { locale: 'pt-BR' });
        let dataAtual = DateTime.now().setLocale('pt-BR');

        let idade = dataAtual.diff(dataNascimento, 'years').years;

        return (Math.floor(idade));
    }
}

module.exports = Paciente;