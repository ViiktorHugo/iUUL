
const entry = require('prompt-sync')({ sigint: true });
const { Consulta } = require("../model/Consulta");
const { formataData, formataHorario } = require('../utils/utils');

/**
 * Classe que armazena consultas e controla a criacao de novos objetos
 */
class ControllerConsulta {

    #Consultas = [];

    constructor(){}

    agendaConsulta() {
        let cpf = entry("CPF: ");
        let data = formataData(entry("Data da consulta: "));
        let horaInicial = formataHorario(entry("Hora inicial: "));
        let horaFinal = formataHorario(entry("Hora final: "));

        this.#Consultas.push(new Consulta(cpf, data, horaInicial, horaFinal));
    }

    cancelaConsulta() { // not done yet
        let cpf = entry("CPF: ");
        let data = formataData(entry("Data da consulta: "));
        let inicial = formataHorario(entry("Hora inicial: "))
    }

    listarConsultas(){ // not done yet
        for (let i = 0; i < this.#Consultas.length; i ++) {
            console.log(this.#Consultas[i].cpfConsulta()); //nao consegue acessar o metodo cpf consulta, por que?
        }
    }
}

module.exports = {
    ControllerConsulta: ControllerConsulta
}