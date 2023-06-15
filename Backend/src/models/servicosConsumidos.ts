import { DataTypes, Model } from 'sequelize';
import database from '../database';
import Servico from './servico';
import Cliente from './cliente';

class ServicosConsumidos extends Model {
  public id!: number;
  public servicoId!: number;
  public clienteId!: number;
}

ServicosConsumidos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    servicoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Servico,
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
    modelName: 'servicosConsumidos',
    timestamps: false,
  }
);

export default ServicosConsumidos;
