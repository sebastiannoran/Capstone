'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('majors', 'collegeId', {
      type: Sequelize.INTEGER,
      refernces: {
        model: 'College',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('majors', 'collegeId')
  }
};

//model association established, verified @ 2:16pm
