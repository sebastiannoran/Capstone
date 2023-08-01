'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { 
    }
  }
  courses.init({
    course_name: DataTypes.STRING,
    course_id: DataTypes.INTEGER,
    course_semester: DataTypes.STRING,
    course_year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'courses',
    tableName: 'courses'
  });
  return courses;
};