'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Junyao",  
          email_address:"junyaokh822@gmail.com",
          password: await bcrypt.hash("password",10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
