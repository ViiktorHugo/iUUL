

const sequelize = require('./database/db');
const Paciente = require('./model/Paciente');
const Consulta = require('./model/Consulta');

(async () => {
    Paciente.init(sequelize);
    Consulta.init(sequelize);

    await sequelize.sync();

    await sequelize.close();
})();