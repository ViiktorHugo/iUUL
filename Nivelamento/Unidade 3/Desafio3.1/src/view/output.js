
/**
 * @description Classe que trata apenas a impressao de dados na tela
 */
class Output {

    /**
     * @description imprime as opcoes do menu principal.
     */
    showMenuPrincipal() {
        this.#printData(`\n\n
        Menu principal:
        1 - Cadastro de pacientes
        2 - Agenda
        3 - Fim `);
    }

    /**
     * @description imprime as opcoes do menu de pacientes.
     */
    showMenuPacientes() {
        this.#printData(`\n\n
        Menu do Cadastro de Pacientes
        1 - Cadastrar novo paciente
        2 - Excluir paciente
        3 - Listar Pacientes (ordenado por CPF)
        4 - Listar Pacientes (ordenado por nome)
        5 - Voltar p/ menu principal `);
    }

    /**
     * @description imprime as opcoes do menu da agenda.
     */
    showMenuAgenda() {
        this.#printData(`\n\n
        Agenda
        1 - Agendar consulta
        2 - Cancelar agendamento
        3 - Listar agenda
        4 - Voltar p/ menu principal `)
    }

    /**
     * @description solicita o cpf do paciente
     */
    showCpf() {
        this.#printData(`Digite o CPF: `)
    }

    /**
     * @description solicita o nome a do paciente
     */
    showNome() {
        this.#printData(`Digite o nome: `)
    }

    /**
     * @description solicita a data de nascimento do paciente
     */
    showDataNascimento() {
        this.#printData(`Digite a data de nascimento: `)
    }

    /**
     * @description solicita a data da consulta
     */
    showDataConsulta() {
        this.#printData(`Digite a data da consulta: `)
    }

    /**
     * @description solicita o horario incial da consulta
     */
    showHorarioInicial() {
        this.#printData(`Digite a hora inicial: `)
    }

    /**
     * @description solicita o horario final da consulta
     */
    showHorarioFinal() {
        this.#printData(`Digite a hora final: `)
    }

    /**
     * @description solicita a entrada do usuario
     */
    showUserChoice() {
        this.#printData(`\n\nDigite uma opção: `)
    }


    /**
     * @description imprime a string, funcao utilizada apenas pela classe output.
     */
    #printData(data) {
        process.stdout.write(data);
    }
}

module.exports = Output;