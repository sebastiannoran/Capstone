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
      "African and African Diaspora Studies": ["AFA 160/HST 160", "AFA 167", "AFA/HST 105"],
      "American Studies": ['AMS 101'],
      "Art": ["ART 120", "ART 200"],
      "Biochemistry": ["BIO 170/171", "BIO 180/181", "CHM 141/121",  "MTH 231",],
      "Biology": ["BIO 170/171", "BIO 180/181", "PHY 120/121",  "MTH 231"],
      "Business": ['BUS 215', 'BUS 160',"ECO 111", "ECO 112",],
      "Chemistry": ["CHM 141/121", "CHM 142/127", "PHY 120/121",  "MTH 231"],
      "Communications": ['COM 115', 'COM 150', 'COM 203'],
      "Computer Science": ["CSC 126", 'CSC 211','CSC 326', "MTH 231"],
      "Computer Technology": ["CSC 126", 'CSC 211','CSC 326', "MTH 231"],
      "Earth and Environmental Science": ["GEO 102/103", "GEO 115/116","ESC 110/111", "MTH 231"],
      "Economics": ["ECO 111", "ECO 112", "ECO/MGT 230",],
      "Engineering Science": ["CHM 141/121", "MTH 231", 'ENS 110', 'ENS 220',],
      "English": ['ENL 290', 'ENL 300', 'ENL 310'],
      "Geography": ["GEG 100", 'GEG 102', 'GEG 212'],
      "History": ['HST 200', 'HST 300',],
      "Information Systems and Informatics": ['ACC 114', 'BUS 160', 'BUS 215', "CSC 126"],
      "International Studies": ['INT 100','INT 367'],
      "Italian Studies": ["ITL 112", 'ITL 120'],
      "Mathematics": ["MTH 230","MTH 231", "MTH 214", "MTH 232",],
      "Medical Laboratory Science": ["BIO 150", "BIO 170/171", "CHM 141/121",],
      "Music": ['MUS 120', 'MUS 123','MUS 125'],
      "Philosophy": ["PHL 100", "PHL 101", "PHL 130"],
      "Physics": ["PHY 120/121", "PHY 160/161", "PHY 240", "CHM 141/121",],
      "Political Science": ["POL 100", "POL 103", "MTH 113"],
      "Psychology": ["PSY 100", 'PSY 201', 'PSY 266', 'PSY 352'],
      "Science, Letters, Society": ["PSY 100", "MTH 123", 'SLS 301', 'SLS 302'],
      "Social Work": ["PSY 100", "POL 100", 'SWK 200', "MTH 113"],
      "Sociology/Anthropology": ['SOC 200', 'SOC 201',],
      "Spanish": ["SPN 112", 'SPN 120', 'SPN 220',],
      "Womens Gender And Sexuality Studies": ['WGS 201', 'WGS 206', 'WGS 222'],
    };
    const csiCoursesArray = Object.values(csiCourses);

    // Loop through each major
    for (const major of majors) {
      const prerequisites = majorPrerequisites[major.name];
      console.log('Major:', major.name);
      console.log('Prerequisites:', prerequisites);
      if (!prerequisites) {
        console.error(`Prerequisites not found for major: ${major.name}`);
        continue;
      }
    
      // Get the course IDs of the prerequisites for this major from the csiCourses array
      const prerequisiteCourseIds = csiCoursesArray
        .filter((course) => {
          const matchingCourse = csiCoursesArray.find((course) => {
            const matches = prerequisites.some((prerequisite) => {
              if (prerequisite.includes('/')) {
                // Handle course ranges (e.g., "BIO 170/171")
                const [start, end] = prerequisite.split('/');
                return course.course_id >= start && course.course_id <= end;
              } else {
                // Handle individual courses (e.g., "ACC 114")
                return course.course_id === prerequisite;
              }
            });
            console.log('Course:', course.course_id);
            console.log('Matches:', matches);
            return matches;
          });

        })
        .map((course) => course.id);
    
      if (prerequisiteCourseIds.length === 0) {
        console.error(`No matching course IDs found for prerequisites of major: ${major.name}`);
        continue;
      }
    
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

  async down(queryInterface, Sequelize) {
    // Remove major_courses data from the table
    await queryInterface.bulkDelete('major_courses', null, {});
  }
};
