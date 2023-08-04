'use strict';

const csiCourses = [
  {
    course_id: "AFA 160/HST 160",
    course_name: "African American History 1619 to Present"
  },
  {
    course_id: "AFA 167",
    course_name: "The Black, Experience"
  },
  {
    course_id: "AFA/HST 105",
    course_name: "Contemporary African Issues"
  },
  {
    course_id: "ANT 100",
    course_name: "Understanding Our Worlds"
  },
  {
    course_id: "ART 100",
    course_name: "Introduction to Visual Arts"
  },
  {
    course_id: "AST 100",
    course_name: "Contemporary Theories of the Solar System"
  },
  {
    course_id: "AST 102",
    course_name: "Contemporary Theories of the Universe"
  },
  {
    course_id: "AST 108",
    course_name: "Survey of the Universe"
  },
  {
    course_id: "AST 110",
    course_name: "Life in Universe"
  },
  {
    course_id: "AST 120",
    course_name: "Space Science I"
  },
  {
    course_id: "AST 160",
    course_name: "Space Science II"
  },
  {
    course_id: "BIO 103",
    course_name: "Introduction to Biology"
  },
  {
    course_id: "BIO 106",
    course_name: "Principles of Biology I"
  },
  {
    course_id: "BIO 108",
    course_name: "Principles of Biology II"
  },
  {
    course_id: "BIO 150",
    course_name: "Human Anatomy and Physiology I"
  },
  {
    course_id: "BIO 160",
    course_name: "Human Anatomy and Physiology II"
  },
  {
    course_id: "BIO 170/171",
    course_name: "General Biology I/General Biology Lab I"
  },
  {
    course_id: "BIO 180/181",
    course_name: "General Biology II, General Biology Lab II"
  },
  {
    course_id: "CHM 104",
    course_name: "Chemistry in a Nutshell"
  },
  {
    course_id: "CHM 106",
    course_name: "Chemistry for Today I"
  },
  {
    course_id: "CHM 110",
    course_name: "Principles of Chemistry I"
  },
  {
    course_id: "CHM 116",
    course_name: "Principles of Chemistry II"
  },
  {
    course_id: "CHM 141/121",
    course_name: "General Chemistry I/General Chemistry Lab I"
  },
  {
    course_id: "CHM 142/122",
    course_name: "General Chemistry II/General Chemistry Lab II"
  },
  {
    course_id: "CHM 240",
    course_name: "Analytical Chemistry"
  },
  {
    course_id: "CHM 250",
    course_name: "Organic Chemistry I"
  },
  {
    course_id: "CSC 115",
    course_name: "Introduction to Computer Technology"
  },
  {
    course_id: "CSC 119",
    course_name: "Computer Technology Concepts"
  },
  {
    course_id: "CSC 126",
    course_name: "Intro to Computer Science"
  },
  {
    course_id: 'CSC 211',
    course_name: 'Intermediate Programming'
  },
  {
    course_id: 'CSC 228',
    course_name: 'Discete Mathematical Structures'
  },
  {
    course_id: 'CSC 326',
    course_name: 'Data Structures'
  },
  {
    course_id: "ECO 101",
    course_name: "Introduction to Economics"
  },
  {
    course_id: "ENS 102",
    course_name: "Introduction to Electrical and Electronic Technology"
  },
  {
    course_id: "ENS 104",
    course_name: "Introduction to Digital Technology"
  },
  {
    course_id: "ECO 111",
    course_name: "Introduction to Microeconomics",
  },
  {
    course_id: "ECO 112",
    course_name: "Introduction to Macroeconomics",
  },
  {
    course_id: "ECO/MGT 230",
    course_name: "Introduction to Economics and Managerial Statistics",
  },
  {
    course_id: "ENS/PHY 250",
    course_name: "Engineering Mechanics"
  },
  {
    course_id: "ESC 110",
    course_name: "Meteorology and Climatology"
  },
  {
    course_id: "FRN 112",
    course_name: "Basic French I"
  },
  {
    course_id: "GEG 100",
    course_name: "Introduction to Geography"
  },
  {
    course_id: "GEG 101",
    course_name: "World Regional Geography"
  },
  {
    course_id: "GEO 100",
    course_name: "Physical Geology"
  },
  {
    course_id: "GEO 102",
    course_name: "Historical Geology"
  },
  {
    course_id: "GEO 115",
    course_name: "Fundamentals of Physical Geology"
  },
  {
    course_id: "GEO 210",
    course_name: "Earth Materials"
  },
  {
    course_id: "HON 121",
    course_name: "The Arts in New York City"
  },
  {
    course_id: "HON 122",
    course_name: "The Peopling of New York City"
  },
  {
    course_id: "HON 223",
    course_name: "Science and Technology In New York City"
  },
  {
    course_id: "HON 224",
    course_name: "Shaping the Future of New York City"
  },
  {
    course_id: "HST 100",
    course_name: "Past and Present"
  },
  {
    course_id: "HST 106",
    course_name: "Africa Encounters Europe"
  },
  {
    course_id: "HST 110",
    course_name: "Individual and Society in Ancient Greece"
  },
  {
    course_id: "HST 115",
    course_name: "Comparative Ancient Religion"
  },
  {
    course_id: "ITL 112",
    course_name: "Basic Italian I"
  },
  {
    course_id: "MTH 102",
    course_name: "Mathematics for Liberal Arts"
  },
  {
    course_id: "MTH 113",
    course_name: "Intro to Probability and Statistics"
  },
  {
    course_id: "MTH 121",
    course_name: "Finite Mathematics"
  },
  {
    course_id: "MTH 123",
    course_name: "College Algebra and Trigonometry"
  },
  {
    course_id: "MTH 130",
    course_name: "Pre-Calculus Mathematics"
  },
  {
    course_id: "MTH 214",
    course_name: "Applied Statistics Using Computers"
  },
  {
    course_id: "MTH 221",
    course_name: "Applied Finite Mathematics & Business"
  },
  {
    course_id: "MTH 230",
    course_name: "Calculus I with Pre-Calculus"
  },
  {
    course_id: "MTH 231",
    course_name: "Analytic Geometry and Calculus I"
  },
  {
    course_id: "MTH 232",
    course_name: "Analytic Geometry and Calculus II"
  },
  {
    course_id: "MTH 233",
    course_name: "Analytic Geometry and Calculus III"
  },
  {
    course_id: "MTH 235",
    course_name: "Accelerated Calculus I"
  },
  {
    course_id: "MUS 105",
    course_name: "World Music"
  },
  {
    course_id: "MUS 108",
    course_name: "Introduction to Jazz History"
  },
  {
    course_id: "MUS 110",
    course_name: "Introduction to Music History"
  },
  {
    course_id: "PHY 107",
    course_name: "Maxwell to Einstein and Beyond"
  },
  {
    course_id: "PHY 114",
    course_name: "Introduction to Physics"
  },
  {
    course_id: "PHY 116",
    course_name: "Physics I"
  },
  {
    course_id: "PHY 120",
    course_name: "General Physics I"
  },
  {
    course_id: "PHY 156",
    course_name: "Physics II"
  },
  {
    course_id: "PHY 160",
    course_name: "General Physics II"
  },
  {
    course_id: "PHY 240",
    course_name: "Wave and Modern Physics"
  },
  {
    course_id: "PHL 100",
    course_name: "Introduction to Logic and Science"
  },
  {
    course_id: "PHL 101",
    course_name: "Introduction to Philosophy"
  },
  {
    course_id: "PHL 130",
    course_name: "Introduction to Ethics"
  },
  {
    course_id: "POL 100",
    course_name: "American Politics and Government"
  },
  {
    course_id: "POL 103",
    course_name: "Science"
  },
  {
    course_id: "POL 140",
    course_name: "Comparative Politics"
  },
  {
    course_id: "POL 160",
    course_name: "Introduction to International Politics"
  },
  {
    course_id: "PSY 100",
    course_name: "Psychology"
  },
  {
    course_id: "PSY 242",
    course_name: "Developmental Psychology",
  },
  {
    course_id: "SOC 100",
    course_name: "Sociology"
  },
  {
    course_id: "SPN 112",
    course_name: "Basic Spanish I"
  },
  {
    course_id: "SPN 119",
    course_name: "Elementary Spanish for Heritage Speakers"
  }
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const couseData = csiCourses.map(({course_id, course_name}) => ({
    course_id: course_id,
    course_name: course_name,
    createdAt: new Date(),
    updatedAt: new Date(),
   }))
   await queryInterface.bulkInsert('courses', couseData);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('courses', null, {});
  }
};
