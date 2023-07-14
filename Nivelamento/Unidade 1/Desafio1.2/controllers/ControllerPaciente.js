

const entry = require('prompt-sync')({ sigint: true });
const { Paciente } = require('../model/Paciente');
const { formataData } = require('../utils/utils');

/**
 * Classe que armazena os pacientes e controla a criacao de novos objetos
 */
class ControllerPaciente {
    #Pacientes = [];

    constructor(){}
    
    cadastraPaciente() {
        let cpf = entry("CPF: ");
        let nome = entry("Nome: ");
        let nascimento = formataData(entry("Data de nascimento: "));

        let p1 = new Paciente(cpf, nome, nascimento);

        this.#Pacientes.push(new Paciente(cpf, nome, nascimento));
    }

    removePaciente() {
        let cpf = entry("CPF: ");

        for (let i = 0; i < this.#Pacientes.length; i ++) {
            if (this.#Pacientes[i].cpfPaciente() === cpf) {
                this.#Pacientes.splice(i-1,1);
            }
        }
    }

    listaPacientesCPF() { //TODO: not implemented yet!

    }

    listaPacientesNome () { //TODO: not implemented yet!

    }
}

module.exports = {
    ControllerPaciente: ControllerPaciente
}