
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

    #cadastraPaciente() {
        let cpf = this.#Input.getStrInput(this.#Output.showCpf());

        let nome = this.#Input.getStrInput(this.#Output.showNome());

        let nascimento = this.#Input.getStrInput(this.#Output.showDataNascimento());

        //realiza o cadastro do paciente
        //fazer verificacoes
        //retorna se o Paciente foi cadastrado com sucesso, caso nao tenha nenhum erro.
    }

    #excluiPaciente() {
        let cpf = this.#Input.getStrInput(this.#Output.showCpf());

        //excluir paciente no db
        //fazer verificacoes
        //retornar se o pacinte foi devidamente excluido
    }

    #listarPacientesByCpf() {
        //comunicacao com o dp atraves dos controllers
    }

    #listarPacientesByNome() {
        //comunicacao com o dp atraves dos controllers
    }

    #agendaConsulta() {
        let cpf = this.#Input.getStrInput(this.#Output.showCpf());
        let data = this.#Input.getStrInput(this.#Output.showDataConsulta());
        let horaInicial = this.#Input.getStrInput(this.#Output.showHorarioInicial());
        let horaFinal = this.#Input.getStrInput(this.#Output.showHorarioFinal());

        //realiza o cadastro de uma nova consulta
        //fazer verificacoes
        //retorna se a consulta foi cadastrado com sucesso, caso nao tenha nenhum erro.
    }

    #cancelaConsulta() {
        let cpf = this.#Input.getStrInput(this.#Output.showCpf());
        let data = this.#Input.getStrInput(this.#Output.showDataConsulta());
        let horaInicial = this.#Input.getStrInput(this.#Output.showHorarioInicial());

        //realiza o cadastro do paciente
        //fazer verificacoes
        //retorna se a consulta foi cancelada com sucesso, caso nao tenha nenhum erro.
    }

    #listarConsultas() {

        while(true) {
            try {
                let escolha = this.#Input.getStrInput(`${this.#Output.showListarConsultas()}`)

                switch (escolha) {
                    case 'T':
                        console.log('Imprime lista toda - IMPLEMENTAR!');
                        break;
                    case 'P':
                        let dataInicial = this.#Input.getStrInput(`${this.#Output.showDataConsulta()}`)
                        let dataFinal = this.#Input.getStrInput(`${this.#Output.showDataConsulta()}`)
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

let m1 = new Menu();

m1.run();

module.exports = Menu;