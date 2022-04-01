const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../database');

class SubCategories extends Model {};

SubCategories.init({
  SubCategoryName: {
    type: DataTypes.STRING
  } ,
  CategoryID : {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'SubCategories',
  timestamps: false
})

module.exports = SubCategories;