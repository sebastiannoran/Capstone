import Root from "./routes/root";
import { createBrowserRouter, RouterProvider,Routes, Route} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import College from "./routes/colleges/College";
import courses from "./routes/colleges/courseData";
import Homepage from "./routes/Homepage";


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
        path: "/college/:collegeId",
        element: (
          <Routes>
            <Route path="/" element={<College courses={courses} />} />
          </Routes>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
