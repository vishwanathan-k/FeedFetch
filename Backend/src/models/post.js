"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      post_comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id",
      targetKey: "id",
    });
  };

  return Post;
};
