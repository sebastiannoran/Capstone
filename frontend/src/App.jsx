import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Login from "./routes/authentication/Login";
import College from "./routes/colleges/College";
import Homepage from "./routes/Homepage";
import Register from "./routes/authentication/Register";
import CollegeHomepage from "./routes/colleges/CollegeHomepage";
import CourseForum from "./routes/courseForums/CourseForum";
import ForumPost from "./routes/forumPosts/ForumPost";
import CreatePost from "./routes/forumPosts/CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/colleges/:collegeId",
        element: <College />,
        children: [
          {
            index: true,
            element: <CollegeHomepage />,
          },
          {
            path: "/colleges/:collegeId/courses/:courseId",
            element: <CourseForum />,
          },
          {
            path: "/colleges/:collegeId/courses/:courseId/posts/:postId",
            element: <ForumPost />,
          },
          {
            path: "/colleges/:collegeId/courses/:courseId/create-post",
            element: <CreatePost />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
