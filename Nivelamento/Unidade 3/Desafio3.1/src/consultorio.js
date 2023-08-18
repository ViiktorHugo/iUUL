

const sequelize = require('./database/db');
const Menu = require('./view/menu');

(async () => {

    try {
        await sequelize.sync();

        const menu = new Menu();
        menu.run();

        await sequelize.close();
    } catch (error) {
        console.error('Error: ', error);
    }
})();