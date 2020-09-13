"use strict";
const jwt = require("jsonwebtoken");
module.exports = {
  up: (queryInterface, Sequelize) => {
    let password = jwt.sign({ foo: "password" }, "password123");
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: "Kai",
          last_name: "K",
          email: "kais@gmail.com",
          password: password,
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Tyson",
          last_name: "T",
          email: "Tysons@gmail.com",
          password: password,
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
