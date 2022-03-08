const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Users extends Model {};

Users.init({
  UserName: {
    type: "varchar(10)"
  },
  Password: {
    type: "varchar(20)"
  },
  FirstName: {
    type: "varchar(30)"
  },
  LastName: {
    type: "varchar(30)"
  },
  Phone: {
    type: "varchar(10)",
    allowNull:true
  },
  Address: {
    type: DataTypes.STRING,
    allowNull:true
  },
  City: {
    type: DataTypes.STRING
  },
  State: {
    type: "varchar(15)"
  },
  isActive: {
    type: DataTypes.BOOLEAN
  },
  isLocked:{
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize,
  modelName: 'users',
  timestamps: false
})

module.exports = Users;