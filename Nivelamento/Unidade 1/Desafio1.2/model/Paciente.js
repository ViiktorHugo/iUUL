
const { DateTime } = require('luxon');

class Paciente {
    #cpf;
    #nome;
    #nascimento;
    #idade;
    #consultas; // verificar coesao e dependencias com o objeto consulta.js

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
     * Adiciona o objeto consulta a lista de consultas do paciente.
     * 
     * @params Objeto consulta a ser adicionado
     */
    addConsulta(Consulta) {
        this.#consultas.push(Consulta);
    }

    /**
     * Remove uma consulta agendada da lista de consultas do paciente.
     * 
     * @params Objeto consulta a ser removido
     */
    rmvConsulta(Consulta) {
        let temp = this.#consultas.find(Consulta);
        this.#consultas.pop(temp);
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
