import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('lista5', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
