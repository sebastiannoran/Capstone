'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('colleges', [{
      name: "College of Staten Island",
      createdAt: new Date(),
      updatedAt: new Date(),
   }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colleges', null, {});
  }
};
