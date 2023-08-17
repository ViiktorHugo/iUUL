

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


module.exports = Paciente;