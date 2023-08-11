"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Major);
      this.belongsTo(models.User);
      this.hasMany(models.Comment);
    }
  } 
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      MajorId: {
        type: DataTypes.INTEGER,
        references: {
          model: "majors",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
    }
  );
  return Post;
};
