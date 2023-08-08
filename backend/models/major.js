"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Major extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.College, {
        foreignKey: "CollegeId",
      });
      this.hasMany(models.Post);
      // this.belongsToMany(models.Course, {
      //   through: 'major_course'
      // });
    }
  }
  Major.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Major",
      tableName: "majors",
    }
  );
  return Major;
};
