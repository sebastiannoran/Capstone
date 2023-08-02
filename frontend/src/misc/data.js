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
        title: "POST 1 TITLE",
        content: "This is in the post contents section.",
      },
      {
        id: 1,
        title: "POST 2 TITLE",
        content: "Post 2 contents.",
      },
      {
        id: 1,
        title:
          "POST 3 TITLE THIS IS JUST A TEST MR. HOLMES! YUURRRRRRR RRRRRR RRRRRR RRRRRR RRRRRR",
        content: "Post 2 contents.",
      },
      {
        id: 1,
        title: "POST 4 TITLE LOLOLOLOLOLOLOLOLOWHATISTHISLOLOL",
        content: "Post 2 contents.",
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
