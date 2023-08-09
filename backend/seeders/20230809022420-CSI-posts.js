'use strict';

const postTitles = [
  {
    title:"POST 1 TITLE",
    content:"This is in the post contents section.",
  },
  {
    title:"POST 2 TITLE",
    content:"Post 2 contents.",
  },
  {
    title: "POST 3 TITLE THIS IS JUST A TEST MR. HOLMES! YUURRRRRRR RRRRRR RRRRRR RRRRRR RRRRRR",
    content:"Post 3 conetens.",
  },
 {
    title:"POST 4 TITLE",
    content:"Post 4 contents.",
 }
  
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const posts = postTitles.map(post => ({
      title:post.title,
      content:post.content,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    // Insert all colleges using bulkInsert
    await queryInterface.bulkInsert('posts', posts, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};