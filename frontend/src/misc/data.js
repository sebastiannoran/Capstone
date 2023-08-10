const data = [
  ["Harvard", "Stanford", "MIT"],
  ["Computer Science", "Biology", "Mathematics"],
  ["CS101", "BIO110", "MATH121"],
  [0, 1, 2],
  [
    //POSTS
    [
      {
        id: 0,
        title: "Lecture on tax rebate",
        content: "Professor James did a fanstastic job, highly reccomend this section.",
      },
      {
        id: 1,
        title: "Helpful resources",
        content: "I used the following youtube playlist for ACC 201, very helpful",
      },
      {
        id: 1,
        title:
          "ACC 111 helpful hints",
        content: "If this is your first time in an accouting class, then please review my notes closley.",
      },
    ],
    //COMMENTS
    [
      {
        id: 0,
        content: "This is in the post-comment contents section.",
      },
    ],
  ],
];

// Accessing the colleges array
const collegeData = data[0];

// Accessing the majors array
const majorData = data[1];

// Accessing the courses array
const courseData = data[2];

const courseIdData = data[3];

const forumData = data[4];

export { data, collegeData, majorData, courseData, courseIdData, forumData };
