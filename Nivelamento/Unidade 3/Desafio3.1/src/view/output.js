
/**
 * @description Classe que trata apenas a impressao de dados na tela
 */
class Output {

    /**
     * @description imprime as boas vindas do programa
     */
    showWelcome() {
        this.#printData(
            '\n\n==================== Bem vindo ao Consultório Odontológico! ===================='
        );
    }

    /**
     * @description imprime as opcoes do menu principal.
     */
    showMenuPrincipal() {
        this.#printData('\nMenu principal: \n' +
                        '1 - Cadastro de pacientes\n' +
                        '2 - Agenda\n' +
                        '3 - Fim\n');
    }

    /**
     * @description imprime as opcoes do menu de pacientes.
     */
    showMenuPacientes() {
        this.#printData ('\nMenu do cadastro de pacientes\n' +
                        '1 - Cadastrar novo paciente\n' +
                        '2 - Excluir paciente\n' +
                        '3 - Listar Pacientes (ordenado por CPF)\n' +
                        '4 - Listar Pacientes (ordenado por nome)\n' +
                        '5 - Voltar p/ menu principal \n')
    }

    /**
     * @description imprime as opcoes do menu da agenda.
     */
    showMenuAgenda() {
        this.#printData('\nMenu de Agenda\n' +
                        '1 - Agendar consulta\n' +
                        '2 - Cancelar agendamento\n' +
                        '3 - Listar agenda\n' +
                        '4 - Voltar p/ menu principal\n');
    }

    /**
     * @description solicita o cpf do paciente
     */
    showCpf() {
        return(`Digite o CPF: `)
    }

    /**
     * @description solicita o nome a do paciente
     */
    showNome() {
        return(`Digite o nome: `)
    }

    /**
     * @description solicita a data de nascimento do paciente
     */
    showDataNascimento() {
        return(`Digite a data de nascimento: `)
    }

    /**
     * @description solicita a data da consulta
     */
    showDataConsulta() {
        return(`Digite a data da consulta: `)
    }

    /**
     * @description solicita o horario incial da consulta
     */
    showHorarioInicial() {
        return(`Digite a hora inicial: `)
    }

    /**
     * @description solicita o horario final da consulta
     */
    showHorarioFinal() {
        return(`Digite a hora final: `)
    }

    showOpcaoUsuario() {
        return(`\nDigite uma opção: `);
    }

    showListarConsultas() {
        return(`Apresentar a agenda T-Toda ou P-Periodo: `);
    }

    /**
     * @description imprime a string, funcao utilizada apenas pela classe output.
     */
    #printData(data) {
        process.stdout.write(data);
    }
}

module.exports = Output;