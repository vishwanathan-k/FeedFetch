"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "UserFollowers",
      [
        {
          user_id: 1,
          follower_id: 2,
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          follower_id: 1,
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("UserFollowers", null, {});
  },
};
