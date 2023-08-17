
const Output = require('./output');
const Input = require('./input');

class Menu {

    #Output = new Output();
    #Input = new Input();

    run() {
        this.#Output.showWelcome();
        this.#runMenuPrincipal();
    }

    #runMenuPrincipal() {
        while(true) {
            try {
                this.#Output.showMenuPrincipal();

                let escolha = this.#Input.getStrInput('\nDigite uma opção: ');
        
                if (escolha === '1') {
                    this.#runMenuPaciente();
                } else if (escolha === '2') {
                    this.#runMenuAgenda();
                } else if (escolha === '3') {
                    process.exit();
                } else {
                    throw new Error('Opção inválida!');
                }
            } catch (error){
                console.log(error.message);
            }
        }
    }

    #runMenuPaciente() {
        while(true) {
            try {
                this.#Output.showMenuPacientes();

                let escolha = this.#Input.getStrInput('\nDigite uma opção: ');
        
                if (escolha === '1') {
                    console.log('Implementar cadastro de paciente');
                } else if (escolha === '2') {
                    console.log('Implementar exclusão de paciente');
                } else if (escolha === '3') {
                    console.log('Implementar listar pacientes CPF');
                } else if (escolha === '4'){
                    console.log('Implementar listar pacientes nome');
                } else if (escolha === '5') {
                    this.#runMenuPrincipal();
                } else {
                    throw new Error('Opção inválida!');
                }
            } catch (error){
                console.log(error.message);
            }
        }
    }

    #runMenuAgenda() {
        while(true) {
            try {
                this.#Output.showMenuAgenda();

                let escolha = this.#Input.getStrInput('\nDigite uma opção: ');
        
                if (escolha === '1') {
                    console.log('Implementar agenda consulta');
                } else if (escolha === '2') {
                    console.log('Implementar cancelamento agendamento');
                } else if (escolha === '3') {
                    console.log('Implementar listar agenda');
                } else if (escolha === '4'){
                    this.#runMenuPrincipal();
                } else {
                    throw new Error('Opção inválida!');
                }
            } catch (error){
                console.log(error.message);
            }
        }
    }
}

module.exports = Menu;