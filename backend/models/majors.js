'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class majors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { 
      this.belongsTo(models.colleges);
    }
  }
  majors.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'majors',
    tableName: 'majors'
  });
  return majors;
};