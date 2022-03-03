const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');
const Users = require('./Users');

class UserAuthViewModel extends Model {};

UserAuthViewModel.init({
    authSuccess: {
      type: DataTypes.BOOLEAN,
    },
    Message : {
      type: DataTypes.STRING,
    },
    UserDetail : {
      type: Users
    }
   
  }, {
    sequelize,
    modelName: 'auth',
    timestamps: false
  })