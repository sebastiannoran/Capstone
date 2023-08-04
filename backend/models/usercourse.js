// // for the many to many relationship between users and courses

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCourse.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    courseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'courses',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'UserCourse',
    tableName: 'user_courses'
  });
  return UserCourse;
};