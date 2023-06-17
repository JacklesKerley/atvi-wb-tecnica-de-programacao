import { DataTypes } from 'sequelize';
import database from '../database';
import RG from './rg';
import Telefone from './telefone';
import ProdutosConsumidos from './produtosConsumidos';
import ServicosConsumidos from './servicosConsumidos';

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
    unique: true,
  },
}, {
  timestamps: false,
});

Cliente.hasOne(RG, { foreignKey: 'idCliente' });
RG.belongsTo(Cliente, { foreignKey: 'idCliente' });

Cliente.hasMany(Telefone, { foreignKey: 'idCliente' });
Telefone.belongsTo(Cliente, { foreignKey: 'idCliente' });

Cliente.hasMany(ProdutosConsumidos, { foreignKey: 'clienteId' });
ProdutosConsumidos.belongsTo(Cliente, { foreignKey: 'clienteId' });

Cliente.hasMany(ServicosConsumidos, { foreignKey: 'clienteId' });
ServicosConsumidos.belongsTo(Cliente, { foreignKey: 'clienteId' });

export default Cliente;

