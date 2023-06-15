import { DataTypes, Model } from 'sequelize';
import database from '../database';

class Produto extends Model {
  public id!: number;
  public nome!: string;
  public valor!: number;
}

Produto.init(
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
    modelName: 'produto',
    timestamps: false,
  }
);

export default Produto;
