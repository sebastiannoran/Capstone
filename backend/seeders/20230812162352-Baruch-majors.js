"use strict";

const baruchMajors = [
  "Accounting",
  "Actuarial Science",
  "Biological Sciences",
  "Business Communications",
  "Communication Studies",
  "Computer Information Systems",
  "CUNY Baccalaureate for Unique and Interdisciplinary Studies",
  "Economics",
  "English",
  "Entrepreneurship",
  "Finance",
  "Financial Mathematics",
  "History",
  "Industrial and Organizational Psychology",
  "International Business",
  "Journalism",
  "Liberal Arts",
  "Management",
  "Marketing Management",
  "Mathematics",
  "Music",
  "Philosophy",
  "Political Science",
  "Psychology",
  "Public Affairs",
  "Real Estate",
  "Sociology",
  "Spanish",
  "Statistics",
  "Statistics and Quantitative Modeling",
];

module.exports = baruchMajors;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const college = await queryInterface.rawSelect(
      "colleges",
      {
        where: { name: "Baruch College" },
      },
      ["id"]
    );
    if (college) {
      const majorData = [];

      for (const majorName of baruchMajors) {
        majorData.push({
          name: majorName,
          createdAt: new Date(),
          updatedAt: new Date(),
          CollegeId: college,
        });
      }
      await queryInterface.bulkInsert("majors", majorData);
    } else {
      console.log("Baruch College not Found");
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("majors", null, {});
  },
};
