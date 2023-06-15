import { DataTypes, Model } from 'sequelize';
import database from '../database';
import  Cliente  from './cliente';

class Telefone extends Model {
  public id!: number;
  public tel1!: string;
  public tel2?: string;
  public idCliente!: number;
}

Telefone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tel1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tel2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idCliente: {
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
    modelName: 'telefone',
    timestamps: false,
  }
);

export default Telefone;
