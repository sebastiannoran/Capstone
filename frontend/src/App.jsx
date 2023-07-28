import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import College from "./routes/colleges/College";
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
        element: <College />,
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




