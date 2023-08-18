

const { DateTime } = require('luxon');
const { Model, Sequelize } = require('sequelize');

/**
 * @description classe paciente
 */
class Paciente extends Model{

    /**
     * @description Cria um novo paciente.
     * @params CPF, nome e data de nascimento
     */
    static init(sequelize) {
        super.init({
            cpf:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nascimento: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            idade: {
                type: Sequelize.INTEGER,
            }
        }, {
            sequelize, 
            modelName: 'Paciente', 
            tableName: 'Pacientes',});

        this.addHook('beforeCreate', 'calculaIdade', async (instance, options) => {
            const dataNascimento = DateTime.fromFormat(instance.nascimento, 'dd/MM/yyyy', { locale: 'pt-BR' });
            const dataAtual = DateTime.now().setLocale('pt-BR');
    
            const idade = dataAtual.diff(dataNascimento, 'years').years;
            instance.idade = Math.floor(idade);
        });
    }
}

module.exports = Paciente;