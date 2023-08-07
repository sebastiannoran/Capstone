'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { 
      //1 course page has many posts
      this.hasMany(models.Post);
      this.belongsToMany(models.User, {
        through: 'user_course'
      });
      this.belongsToMany(models.Major, {
        through: 'major_course'
      })
    }
  }
  Course.init({
    name: DataTypes.STRING,
    courseId: DataTypes.INTEGER,
    semester: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
  });
  return Course;
};