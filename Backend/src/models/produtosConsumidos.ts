import { DataTypes, Model } from 'sequelize';
import database from '../database';
import Produto from './produto';
import Cliente from './cliente';

class ProdutosConsumidos extends Model {
  public id!: number;
  public produtoId!: number;
  public clienteId!: number;
}

ProdutosConsumidos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    produtoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Produto,
        key: 'id',
      },
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cliente,
        key: 'id',
      },
    },
  },
  {
    sequelize: database,
    modelName: 'produtosConsumidos',
    timestamps: false,
  }
);

export default ProdutosConsumidos;
