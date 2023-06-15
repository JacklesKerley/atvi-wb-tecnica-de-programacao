import { DataTypes, Model } from 'sequelize';
import database from '../database';
import  Cliente  from './cliente';

class RG extends Model {
  public id!: number;
  public rg1!: string;
  public rg2?: string;
  public idCliente!: number;
}

RG.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rg1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rg2: {
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
    modelName: 'rg',
    timestamps: false,
  }
);

export default RG;
