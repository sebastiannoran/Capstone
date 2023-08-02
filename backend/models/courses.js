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
      //1 course page has many posts
      this.hasMany(models.posts);
      this.belongsToMany(models.users, {
        through: 'user_courses'
      });
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