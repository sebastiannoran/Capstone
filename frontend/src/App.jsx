import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Login from "./routes/authentication/Login";
import College from "./routes/colleges/College";
import courses from "./routes/colleges/courseData";
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
        path: "/login",
        element: <Login />,
      },
      {
          path: "/college/:collegeId",
          element: (
            <Routes>
              <Route path="/" element={<College courses={courses} />} />
              <Route
                path="/college-home/:collegeId/:courseId"
                element={<CourseForum />}
              />
            </Routes>
          ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
