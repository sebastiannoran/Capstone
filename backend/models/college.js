'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class College extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Major);
    }
  }
  colleges.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'College',
    tableName: 'colleges'
  });
  return colleges;
};