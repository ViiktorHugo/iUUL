
const Paciente = require('../model/Paciente');

/**
 * Classe que cria novos pacientes e insere no banco de dados
 */
class ControllerPaciente {
    
    async cadastraPaciente (cpf, nome, nascimento) {
        const paciente = await Paciente.create({cpf,nome,nascimento});
        return paciente;
    }

    async removePaciente (cpf) {
        const rmvPaciente = await Paciente.destroy({where: {cpf}});
        return rmvPaciente;
    }

    async listaPacientesCPF () {
        const pacientes = await Paciente.findAll({where: {cpf}});
        return pacientes;
    }

    async listaPacientesNome () {
        const pacientes = await Paciente.findAll({where: {nome}});
        return pacientes;
    }
}

module.exports = ControllerPaciente;