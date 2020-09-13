"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          user_id: 1,
          post_comment: "Test Comment 1",
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          post_comment: "Test Comment 2",
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
