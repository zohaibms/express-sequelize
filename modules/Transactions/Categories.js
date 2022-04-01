const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../database');

class Categories extends Model {};

Categories.init({
  CategoryName: {
    type: DataTypes.STRING
  } 
}, {
  sequelize,
  modelName: 'Categories',
  timestamps: false
})

module.exports = Categories;