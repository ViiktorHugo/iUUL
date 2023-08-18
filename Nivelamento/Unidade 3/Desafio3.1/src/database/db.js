const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('local-desafio3', 'postgres', '27231073', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

module.exports = sequelize;