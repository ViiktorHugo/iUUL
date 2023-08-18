
const Output = require('./output');
const Input = require('./input');
const ControllerPaciente = require('../controllers/ControllerPaciente');
const ControllerConsulta = require('../controllers/ControllerConsulta');

class Menu {

    #Output = new Output();
    #Input = new Input();
    #ControllerPaciente = new ControllerPaciente();
    #ControllerConsulta = new ControllerConsulta();

    run() {
        this.#Output.showWelcome();
        this.#runMenuPrincipal();
    }

    #runMenuPrincipal() {
        while(true) {
            try {
                this.#Output.showMenuPrincipal();
        
                let escolha = this.#Input.getStrInput(`${this.#opcaoUsuario()}`);

                switch (escolha) {
                    case '1':
                        this.#runMenuPaciente();
                        break;
                    case '2':
                        this.#runMenuAgenda();
                        break;
                    case '3':
                        process.exit();
                    default:
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

                let escolha = this.#Input.getStrInput(`${this.#opcaoUsuario()}`);

                switch(escolha) {
                    case '1':
                        this.#cadastraPaciente();
                        break;
                    case '2':
                        this.#excluiPaciente();
                        break;
                    case '3':
                        this.#listarPacientesByCpf();
                        break;
                    case '4':
                        this.#listarPacientesByNome();
                        break;
                    case '5':
                        this.#runMenuPrincipal();
                        break;
                    default:
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

                let escolha = this.#Input.getStrInput(`${this.#opcaoUsuario()}`);

                switch(escolha) {
                    case '1':
                        this.#agendaConsulta();
                        break;
                    case '2':
                        this.#cancelaConsulta();
                        break;
                    case '3':
                        this.#listarConsultas();
                        break;
                    case '4':
                        this.#runMenuPrincipal();
                        break;
                    default:
                        throw new Error('Opção inválida!');
                }
            } catch (error){
                console.log(error.message);
            }
        }
    }

    async #cadastraPaciente() {
        let cpf = this.#Input.getStrInput(this.#Output.showCpf());

        let nome = this.#Input.getStrInput(this.#Output.showNome());

        let nascimento = this.#Input.getStrInput(this.#Output.showDataNascimento());

        await this.#ControllerPaciente.cadastraPaciente(cpf, nome, nascimento);


        //fazer verificacoes
        //retorna se o Paciente foi cadastrado com sucesso, caso nao tenha nenhum erro.
    }

    async #excluiPaciente() {
        let cpf = this.#Input.getStrInput(this.#Output.showCpf());

        await this.#ControllerPaciente.removePaciente(cpf);

        //fazer verificacoes
        //retornar se o pacinte foi devidamente excluido
    }

    async #listarPacientesByCpf() {
        await this.#ControllerPaciente.listaPacientesCPF();
    }

    async #listarPacientesByNome() {
        await this.#ControllerPaciente.listaPacientesNome();
    }

    async #agendaConsulta() {
        let cpf = this.#Input.getStrInput(this.#Output.showCpf());
        let data = this.#Input.getStrInput(this.#Output.showDataConsulta());
        let horaInicial = this.#Input.getStrInput(this.#Output.showHorarioInicial());
        let horaFinal = this.#Input.getStrInput(this.#Output.showHorarioFinal());

        await this.#ControllerConsulta.agendaConsulta(cpf, data, horaInicial, horaFinal);

        //fazer verificacoes
        //retorna se a consulta foi cadastrado com sucesso, caso nao tenha nenhum erro.
    }

    async #cancelaConsulta() {
        let cpf = this.#Input.getStrInput(this.#Output.showCpf());
        let data = this.#Input.getStrInput(this.#Output.showDataConsulta());
        let horaInicial = this.#Input.getStrInput(this.#Output.showHorarioInicial());

        await this.#ControllerConsulta.cancelaConsulta(cpf, data, horaInicial);

        //fazer verificacoes
        //retorna se a consulta foi cancelada com sucesso, caso nao tenha nenhum erro.
    }

    async #listarConsultas() {

        while(true) {
            try {
                let escolha = this.#Input.getStrInput(`${this.#Output.showListarConsultas()}`)

                switch (escolha) {
                    case 'T':
                        await this.#ControllerConsulta.listarTodasConsultas();
                        break;
                    case 'P':
                        let dataInicial = this.#Input.getStrInput(`${this.#Output.showDataConsulta()}`)
                        let dataFinal = this.#Input.getStrInput(`${this.#Output.showDataConsulta()}`)
                        await this.#ControllerConsulta.listarConsultasPorPeriodo(dataInicial, dataFinal);
                        break;
                    default:
                        throw new Error('Opção inválida!');
                }
            } catch {
                console.log(error.message);
            }
        }
    }

    #opcaoUsuario() {
        return this.#Output.showOpcaoUsuario();
    }
}

module.exports = Menu;