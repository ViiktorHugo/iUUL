const { Model, DataTypes, Sequelize } = require("sequelize");

/**
 * @description classe Consulta
 */
class Consulta extends Model{

    /**
     * Cria uma nova consulta.
     * @params cpf, data da consulta, horario incial, horario final
     */
    static init(sequelize) {
        super.init({
            cpf: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            data: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            inicio: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            fim: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            duracao:{
                type: Sequelize.INTEGER,
            }
        }, {
            sequelize,
            modelName: 'Consulta',
            tableName: 'Consultas'});
    }
}

module.exports = Consulta;
