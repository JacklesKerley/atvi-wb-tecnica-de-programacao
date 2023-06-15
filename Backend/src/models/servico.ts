import { DataTypes, Model } from 'sequelize';
import database from '../database';

class Servico extends Model {
  public id!: number;
  public nome!: string;
  public valor!: number;
}

Servico.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: 'servico',
    timestamps: false,
  }
);

export default Servico;
