const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../database');

class Transactions extends Model {};

Transactions.init({
  MasterCategory: {
    type: "varchar(100)"
  },
  SubCategory: {
    type: "varchar(100)"
  },
  DateEntry: {
    type: DataTypes.DATEONLY
  },
  Location: {
    type: "varchar(50)", 
    allowNull: true
  },
  Payee: {
    type: "varchar(10)",
    allowNull:true
  },
  Description: {
    type: DataTypes.STRING,
    allowNull:true
  },
  PaymentMethod: {
    type: DataTypes.STRING
  },
  Amount: {
    type: DataTypes.NUMBER
  }
}, {
  sequelize,
  modelName: 'Transactions',
  timestamps: false
})

module.exports = Transactions;