
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
     * @description imprime a string, funcao utilizada apenas pela classe output.
     */
    showUserChoice() {
        this.#printData(`\n\nDigite uma opção: `)
    }


    /**
     * @description imprime as opcoes do menu principal.
     */
    #printData(data) {
        process.stdout.write(data);
    }
}

module.exports = Output;