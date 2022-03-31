const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../database');

class Sidebar extends Model {};

Sidebar.init({
  menu: {
   type: DataTypes.STRING,
  },  
}, {
  sequelize,
  modelName: 'sidebar',
  timestamps: false
})

module.exports = Sidebar;