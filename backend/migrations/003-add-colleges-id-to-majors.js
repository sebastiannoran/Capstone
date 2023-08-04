'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('majors', 'CollegeId', {
      type: Sequelize.INTEGER,
      refernces: {
        model: 'colleges',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('majors', 'CollegeId')
  }
};

//model association established, verified @ 2:16pm
