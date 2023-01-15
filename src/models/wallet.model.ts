import { DataTypes, Model, Sequelize } from 'sequelize';

export default (sequelize : Sequelize ) => {
  class Wallet extends Model {
    public id!: string;
    public address!: string;

    public name!: string;
    public symbol!: string;
    public price!: number;
    public supply!: number;
    public created_at!: Date;
    public updated_at!: Date;
  }

  Wallet.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    address: {
      type: DataTypes.UUID,
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },{
    sequelize ,
    tableName: 'wallet',
    hooks: {
      beforeUpdate: (alias: Wallet) => {
        alias.updated_at = new Date();
      }
    }
  })

  return Wallet;
}