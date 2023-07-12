const { Consulta } = require("./Consulta");
const { Paciente } = require("./Paciente");

// iniciar menus de texto

function menuPrincipal(){
    console.log("Menu principal:")
    console.log("1 - Cadastro de pacientes")
    console.log("2 - Agenda")
    console.log("3 - Fim")
}

function menuPacientes(){
    console.log("Menu do Cadastro de Pacientes")
    console.log("1 - Cadastrar novo paciente")
    console.log("2 - Excluir paciente")
    console.log("3 - Listar Pacientes (ordenado por CPF)")
    console.log("4 - Listar Pacientes (ordenado por nome)")
    console.log("5 - Voltar p/ menu principal")
}

function menuAgenda(){
    console.log("Agenda")
    console.log("1 - Agendar consulta")
    console.log("2 - Cancelar agendamento")
    console.log("3 - Listar agenda")
    console.log("4 - Voltar p/ menu principal")
}
