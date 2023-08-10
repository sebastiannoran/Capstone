"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "majors",
      [
        {
          name: "Accounting",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "African and African Diaspora Studies",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "American Studies",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Art",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Biochemistry",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Biology",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Business",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chemistry",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Communications",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Computer Science",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Computer Technology",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Earth and Environmental Science",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Economics",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Electrical Engineering",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Engineering Science",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "English",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Geography",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "History",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Information Systems and Informatics",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "International Studies",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Italian Studies",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mathematics",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Medical Laboratory Science",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Music",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nursing",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Philosophy",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Physics",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Political Science",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Psychology",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Science, Letters, Society",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Social Work",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sociology/Anthropology",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spanish",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Womens Gender And Sexuality Studies",
          CollegeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("majors", null, {});
  },
};
