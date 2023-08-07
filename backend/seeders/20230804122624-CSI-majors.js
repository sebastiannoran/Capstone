'use strict';

const csiMajors = [
  "Accounting",
  "African and African Diaspora Studies",
  "American Studies",
  "Art",
  "Biochemistry",
  "Biology",
  "Business",
  "Chemistry",
  "Communications",
  "Computer Science",
  "Computer Technology",
  "Earth and Environmental Science",
  "Economics",
  "Electrical Engineering",
  "Engineering Science",
  "English",
  "Geography",
  "History",
  "Information Systems and Informatics",
  "International Studies",
  "Italian Studies",
  "Mathematics",
  "Medical Laboratory Science",
  "Music",
  "Nursing",
  "Philosophy",
  "Physics",
  "Political Science",
  "Psychology",
  "Science, Letters, Society",
  "Social Work",
  "Sociology/Anthropology",
  "Spanish",
  "Womens Gender And Sexuality Studies",
]
module.exports = csiMajors;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Get the collegeId of CSI
    const college = await queryInterface.rawSelect(
      'colleges',
      {
        where: { name: "College of Staten Island" },
      },
      ['id']
    );

    // If the collegeId is found, insert data into the majors table
    if (college) {
      // Create an array to store major objects
      const majorData = [];

      // Loop through the majors list and create major objects
      for (const majorName of csiMajors) {
        majorData.push({
          name: majorName,
          createdAt: new Date(),
          updatedAt: new Date(),
          collegeId: college, // Use the retrieved collegeId
        });
      }

      // Insert all major objects into the majors table
      await queryInterface.bulkInsert('majors', majorData);
    } else {
      console.error("College of Staten Island not found.");
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('majors', null, {});
  }
};
