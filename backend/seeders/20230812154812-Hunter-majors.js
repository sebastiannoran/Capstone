'use strict';

const hunterMajors = [
  "Accounting",
      "Adolescence Education: Biology",
      "Adolescence Education: Mathematics",
      "Africana and Puerto Rican/Latino Studies",
      "Anthropology",
      "Anthropology",
      "Arabic",
      "Archaeology",
      "Art",
      "Arts Management and Leadership",
      "Bio-Pharmacology",
      "Biological Sciences",
      "Biology, Grades 7-12",
      "Business Studies",
      "Chemistry and Adolescence Education: Chemistry",
      "Chemistry Major 1",
      "Chemistry, Grades 7-12",
      "Childhood Education, Grades 1-6 Quest",
      "Chinese Language and Literature",
      "Chinese, Grades 7-12",
      "Classical Studies",
      "Comparative Literature",
      "Computer Science",
      "Dance",
      "Early Childhood Education, Birth to Grade 2nd",
      "Economics",
      "English",
      "English Language Arts",
      "English Literature",
      "English, Grades 7-12",
      "Environmental Studies",
      "Environmental Studies/Earth Science Teacher, Grades 7-12",
      "Film",
      "French",
      "French, Grades 7-12",
      "Geography",
      "German",
      "German, Grades 7-12",
      "Gerontological/Adult Health Nurse Practitioner",
      "Greek",
      "Hebrew",
      "Hebrew, Grades 7-12",
      "History",
      "Human Biology",
      "Human Rights",
      "Italian",
      "Italian, Grades 7-12",
      "Jewish Studies",
      "Latin",
      "Latin American and Caribbean Studies",
      "Latin and Greek",
      "Maternal/Child Nursing",
      "Mathematics",
      "Mathematics, Grades 7-12",
      "Mathematics/Statistics and Applied Mathematics",
      "Media Studies",
      "Medical Lab Sciences: Biomedical Science",
      "Medical Laboratory Sciences: Biological Sciences",
      "Music",
      "Music/Music, Grades Pre K-12",
      "Nursing",
      "Nutrition and Food Science: Dietetics",
      "Philosophy",
      "Physics",
      "Political Science",
      "Psychology",
      "Public Health",
      "Public Policy",
      "Religion",
      "Romance Languages",
      "Russian",
      "Russian, Grades 7-12",
      "Social Studies",
      "Social Work",
      "Sociology",
      "Sociology/Social Research",
      "Spanish",
      "Statistics",
      "Statistics and Statistics Applied Mathematics",
      "Studio Art",
      "Theatre",
      "Urban Studies",
      "Women and Gender Studies"
]

module.exports = hunterMajors;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const college = await queryInterface.rawSelect( 
  'colleges',
  {
    where: { name: 'Hunter College' },
  },
  ['id']
);
   if (college) {
    const majorData = [];

    for (const majorName of hunterMajors){ 
      majorData.push({
        name: majorName,
        createdAt: new Date(),
        updatedAt: new Date(),
        CollegeId: college,
      })
    }
    await queryInterface.bulkInsert('majors', majorData);
   } else {
    console.log('Hunter College not Found');
   }
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('majors', null, {});
  }
};

