'use strict';

const csiCourses = require('./20230804143409-CSI-courses');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const majors = await queryInterface.sequelize.query(
      'SELECT id, name FROM majors',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const majorCoursesData = [];
    const majorPrerequisites = {
      "Accounting": ['ACC 114', 'ACC 218', 'ECO 111', 'ECO 112'],
      "Accounting and Business Management": [],
      "African and African Diaspora Studies": [],
      "American Studies": [],
      "Art": [],
      "Biochemistry": ["BIO 170/171", "BIO 180/181", "CHM 141/121",  "MTH 231",],
      "Biology": ["BIO 170/171", "BIO 180/181", "PHY 120/121",  "MTH 231"],
      "Business": ['BUS 215', 'BUS 160',"ECO 111", "ECO 112",],
      "Chemistry": ["CHM 141/121", "CHM 142/127", "PHY 120/121",  "MTH 231"],
      "Cinema Studies": [],
      "Communications": [],
      "Computer Science": ["CSC 126", 'CSC 211','CSC 326', "MTH 231"],
      "Computer Technology": ["CSC 126", 'CSC 211','CSC 326', "MTH 231"],
      "Drama": [],
      "Earth and Environmental Science": ["GEO 102/103", "GEO 115/116","ESC 110/111", "MTH 231"],
      "Economics": ["ECO 111", "ECO 112", "ECO/MGT 230",],
      "Electrical Engineering": [],
      "Engineering Science": ["CHM 141/121", "MTH 231", 'ENS 110', 'ENS 220',],
      "English": [],
      "Geography": [],
      "History": [],
      "Information Systems and Informatics": [],
      "International Studies": [],
      "Italian Studies": [],
      "Latin American Caribbean and Latina/o Studies": [],
      "Liberal Arts and Sciences": [],
      "Mathematics": [],
      "Medical Laboratory Science": [],
      "Modern China Studies": [],
      "Music": [],
      "Nursing": [],
      "Philosophy": [],
      "Physics": [],
      "Political Science": [],
      "Psychology": [],
      "Science, Letters, Society": [],
      "Social Work": [],
      "Sociology/Anthropology": [],
      "Spanish": [],
      "Womens Gender And Sexuality Studies": [],
    };
    // Loop through each major
    for (const major of majors) {
      const prerequisites = majorPrerequisites[major.name];

      // Get the course IDs of the prerequisites for this major from the csiCourses list
      const prerequisiteCourseIds = csiCourses
        .filter((course) => prerequisites.includes(course.course_id))
        .map((course) => course.id);

      // Create major_courses objects for each major and its prerequisite courses
      const majorCourses = prerequisiteCourseIds.map((courseId) => ({
        majorId: major.id,
        courseId: courseId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

      // Add the major_courses objects to the main array
      majorCoursesData.push(...majorCourses);
    }

    // Insert all major_courses objects into the major_courses table
    await queryInterface.bulkInsert('major_courses', majorCoursesData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('major_courses', majorCoursesData);
  }
};
