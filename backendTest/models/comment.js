"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.belongsTo(models.Post);
    }
  }
  Comment.init(
    {
      content: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            msg: "Content can't be blank",
            args: true,
          },
        },
      },
      PostId: {
        type: DataTypes.INTEGER,
        references: {
          model: "posts",
          key: "id",
        },
        allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "comments",
    }
  );
  return Comment;
};
