'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users);
      this.belongsTo(models.posts);
    }
  }
  comments.init({
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'comments',
    tableName: 'comments',
  });
  return comments;
};