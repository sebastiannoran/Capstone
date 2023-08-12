'use strict';

const collegeNames = [
  "NYC College of Technology",
  "Baruch College",
  "Borough of Manhattan Community College",
  "Bronx Community College",
  "Brooklyn College",
  "College of Staten Island",
  "Hostos Community College",
  "Hunter College",
  "Kingsborough Community College",
  "LaGuardia Community College",
  "Lehman College",
  "Medgar Evers College",
  "Queens College",
  "Queensborough Community College",
  "York College",
  "City College of New York",
  "John Jay College of Criminal Justice",
  "School of Professional Studies",
  "Guttman Community College",
  "School of Labor & Urban Studies"
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const colleges = collegeNames.map(name => ({
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    // Insert all colleges using bulkInsert
    await queryInterface.bulkInsert('colleges', colleges, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colleges', null, {});
  }
};