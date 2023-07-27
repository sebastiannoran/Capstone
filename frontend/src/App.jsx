import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import College from "./routes/colleges/College";
import Homepage from "./routes/Homepage";
import Register from "./routes/authentication/Register";
import Major from "./routes/majors/Major";
import CollegeHomepage from "./routes/colleges/CollegeHomepage";

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
        path: "/college/:collegeId",
        element: <College />,
        children: [
          {
            index: true,
            element: <CollegeHomepage />,
          },
          {
            path: "/major/:majorId",
            element: <Major />,
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
