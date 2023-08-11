"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // this.hasMany(models.Major);
      this.hasMany(models.Post);
      this.hasMany(models.Comment);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email_address: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
