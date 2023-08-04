'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Post);
      this.hasMany(models.Comment);
      this.belongsToMany(models.Course, {
        through: 'user_courses'
      });
    }
  }
  users.init({
    name: DataTypes.STRING,
    email_address: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return users;
};