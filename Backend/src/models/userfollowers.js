"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const UserFollowers = sequelize.define(
    "UserFollowers",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      follower_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  UserFollowers.associate = function (models) {
    UserFollowers.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id",
      targetKey: "id",
    });
  };

  return UserFollowers;
};
