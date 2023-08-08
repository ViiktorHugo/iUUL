const Sequelize = require('sequelize');
const sequelize = new Sequelize('Desafio3', 'postgres', '47995817', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

module.exports = sequelize;