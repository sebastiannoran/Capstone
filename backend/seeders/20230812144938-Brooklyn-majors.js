'use strict';

const brooklynMajors = [
      "Accounting",
      "Actuarial Mathematics",
      "Africana Studies",
      "American Studies",
      "Anthropology",
      "Art",
      "Art History",
      "Biology",
      "Business Administration",
      "Business Management",
      "Caribbean Studies (Dual Major)",
      "Chemistry",
      "Chemistry Teacher",
      "Childhood Education Grades 1-6",
      "Childhood Education Grades 1-6: Extension to Bilingual Education",
      "Children and Youth Studies",
      "Classics",
      "Communication",
      "Communication Sciences and Disorders",
      "Comparative Literature",
      "Computational Mathematics",
      "Computer Science",
      "Creative Writing",
      "Early Childhood Education Teacher Birth-Grade 2",
      "Early Childhood/Early Childhood Special Education",
      "Earth and Environmental Sciences",
      "Earth Science Teacher, Grades 7-12",
      "Economics",
      "English",
      "English Teacher",
      "Exercise Science",
      "Film",
      "Film Production",
      "Finance",
      "Financial Mathematics",
      "French",
      "French Teacher",
      "Health and Nutrition Sciences",
      "Health and Nutrition Sciences",
      "History",
      "Information Systems",
      "Internal Accounting",
      "Italian",
      "Italian Teacher",
      "Journalism and Media Studies",
      "Judaic Studies",
      "Linguistics",
      "Mathematics",
      "Mathematics",
      "Mathematics Teacher",
      "Multimedia Computing",
      "Music",
      "Music Composition",
      "Music Education",
      "Non-Profit Fiscal Management",
      "Performance",
      "Philosophy",
      "Physical Education Teacher",
      "Physics",
      "Physics",
      "Physics Teacher",
      "Political Science",
      "Professional Communication",
      "Psychology",
      "Psychology",
      "Public Accounting and Business Management and Finance",
      "Puerto Rican and Latino Studies",
      "Religion (Dual Major)",
      "Russian",
      "Social Studies Teacher",
      "Sociology",
      "Spanish",
      "Spanish Teacher",
      "Television and Radio",
      "Theater",
      "Theater",
      "Urban Sustainability",
      "Women’s and Gender Studies"
]

module.exports = brooklynMajors;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const college = await queryInterface.rawSelect (
    'colleges',
    {
      where: { name: 'Brooklyn College'},
    },
    ['id']
   );

   if (college) {
      const majorData = [];

      for (const majorName of brooklynMajors) {
        majorData.push ({
          name: majorName,
          createdAt: new Date(),
          updatedAt: new Date (),
          CollegeId: college,
        });
      }
      await queryInterface.bulkInsert('majors', majorData);
    } else {
      console.log('Brooklyn College not found');
    }
   },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('majors', null, {});
  }
};
