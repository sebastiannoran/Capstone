"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert all colleges using bulkInsert
    await queryInterface.bulkInsert(
      "colleges",
      [
        {
          name: "College of Staten Island",
          logo: "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/support/csi_logo_gray.png",
          homepageImg:
            "https://coursedog-images-public.s3.us-east-2.amazonaws.com/undefined/Library01.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brooklyn College",
          logo: "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/support/brooklyn_logo_gray.png",
          homepageImg:
            "https://www.brooklyn.edu/wp-content/uploads/NEWS-Default-1-Featured.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hunter College",
          logo: "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/support/hunter_logo_gray.png",
          homepageImg:
            "https://s29068.pcdn.co/wp-content/uploads/hunter-campus.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baruch College",
          logo: "https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/home-preview/support/baruch_logo_gray.png",
          homepageImg:
            "https://www1.cuny.edu/mu/forum/files/2022/09/Baruch2_S-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("colleges", null, {});
  },
};
