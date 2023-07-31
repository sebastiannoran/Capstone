import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import College from "./routes/colleges/College";
import Homepage from "./routes/Homepage";
import Register from "./routes/authentication/Register";
import CollegeHomepage from "./routes/colleges/CollegeHomepage";
import CourseForum from "./routes/courseForums/CourseForum";

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
        path: "/college-home/:collegeId",
        element: <College />,
        children: [
          {
            index: true,
            element: <CollegeHomepage />,
          },
          {
            path: "/college-home/:collegeId/:courseId",
            element: <CourseForum />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
