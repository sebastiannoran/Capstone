'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class majorcourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  majorcourse.init({
    majorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Major', 
        key: 'id', 
      }
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'Course',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'MajorCourse',
    tableName: 'major_course'
  });
  return majorcourse;
};