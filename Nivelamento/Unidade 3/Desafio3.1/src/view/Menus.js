const { ControllerConsulta } = require('../controllers/ControllerConsulta');
const { ControllerPaciente } = require('../controllers/controllerPaciente'); //corrigir imports apos alteracao

const entry = require('prompt-sync')({ sigint: true });

//separar melhor isso


let pacientes = new ControllerPaciente();
let consultas = new ControllerConsulta();

function main() {
    menuPrincipal();
    let opcaoSelecionada = entry("Digite uma opção: ")

    if (opcaoSelecionada == 1) {
        menuPacientes();
    } else if (opcaoSelecionada == 2) {
        menuAgenda();
    } else if (opcaoSelecionada == 3) {
        process.exit();
    } else {
        try {
            throw new Error("Opção inválida! \n")
        } catch (error) {
            console.log(error.message);
        } finally {
            main();
        }
    }
}


function menuPrincipal(){
    console.log("\nMenu principal:")
    console.log("1 - Cadastro de pacientes")
    console.log("2 - Agenda")
    console.log("3 - Fim \n")
}

function menuPacientes(){
    console.log("\nMenu do Cadastro de Pacientes")
    console.log("1 - Cadastrar novo paciente")
    console.log("2 - Excluir paciente")
    console.log("3 - Listar Pacientes (ordenado por CPF)")
    console.log("4 - Listar Pacientes (ordenado por nome)")
    console.log("5 - Voltar p/ menu principal \n")

    let opcaoSelecionada = entry("Digite uma opção: ")

    if (opcaoSelecionada == 1) {
        pacientes.cadastraPaciente();
        menuPacientes();
    } else if (opcaoSelecionada == 2) {
        pacientes.removePaciente();
        menuPacientes();
    } else if (opcaoSelecionada == 3) {
        pacientes.listaPacientesCPF();
        menuPacientes();
    } else if (opcaoSelecionada == 4) {
        pacientes.listaPacientesNome();
        menuPacientes();
    } else if (opcaoSelecionada == 5) {
        main();
    } else {
        try {
            throw new Error("Opção inválida! \n")
        } catch (error) {
            console.log(error.message);
        } finally {
            menuPacientes();
        }
    }
}

function menuAgenda(){
    console.log("\nAgenda")
    console.log("1 - Agendar consulta")
    console.log("2 - Cancelar agendamento")
    console.log("3 - Listar agenda")
    console.log("4 - Voltar p/ menu principal \n")

    let opcaoSelecionada = entry("Digite uma opção: ")

    if (opcaoSelecionada == 1) {
        consultas.agendaConsulta();
        menuAgenda();
    } else if (opcaoSelecionada == 2) {
        consultas.cancelaConsulta();
        menuAgenda();
    } else if (opcaoSelecionada == 3) {
        consultas.listarConsultas();
        menuAgenda();
    } else if (opcaoSelecionada == 4) {
        main();
    } else {
        try {
            throw new Error("Opção inválida! \n")
        } catch (error) {
            console.log(error.message);
        } finally {
            menuAgenda();
        }
    }
}

main();