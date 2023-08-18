const Consulta = require("../model/Consulta");

/**
 * Classe que cria novas consultas e armazena no banco de dados
 */
class ControllerConsulta {

    async agendaConsulta (cpf, data, inicio, fim) {
        const consulta = await Consulta.create({cpf,data,inicio,fim});
        return consulta;

    }

    async cancelaConsulta (cpf, data, horaInicial) { 
        const rmvConsulta = await Consulta.destroy({where: {cpf, data, horaInicial}});
        return rmvConsulta;
    }

    async listarConsultasPorPeriodo (dataInicial, dataFinal){ 
        const consultas = await Consulta.findAll({where: {data: {gt:dataInicial}, data: {lte:dataFinal}}});
        return consultas;
    }

    async listarTodasConsultas (){ 
        const consultas = await Consulta.findAll();
        return consultas;
    }
}

module.exports = ControllerConsulta;
