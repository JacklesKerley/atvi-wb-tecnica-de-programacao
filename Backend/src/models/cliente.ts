import { DataTypes } from 'sequelize';
import database from '../database';

const Cliente = database.define('cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

Cliente.sync()
  .then(() => {
    console.log('Tabela cliente criada com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao criar tabela cliente:', error);
  });

export default Cliente;

