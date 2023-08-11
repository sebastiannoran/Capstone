import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Login from "./routes/authentication/Login";
import College ,{loader as collegeLoader}from "./routes/colleges/College";
import Homepage from "./routes/Homepage";
import Register from "./routes/authentication/Register";
import CollegeHomepage, {
  loader as majorLoader,
} from "./routes/colleges/CollegeHomepage";
import ForumPost, {
  loader as forumPostLoader,
} from "./routes/forumPosts/ForumPost";
import CreatePost, {
  action as createPostAction,
} from "./routes/forumPosts/CreatePost";
import MajorForum, { loader as forumLoader } from "./routes/majors/MajorForum";
import { action as deletePostAction } from "./routes/forumPosts/DeletePost";
import EditPost, {
  loader as editPostLoader,
  action as editPostAction,
} from "./routes/forumPosts/EditPost";
import ProtectedRoute from "./routes/ProtectedRoute";

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
        loader:collegeLoader,
        children: [
          {
            index: true,
            element: <CollegeHomepage />,
            loader: majorLoader,
          },
          {
            path: "/colleges/:collegeId/majors/:majorId",
            element: <MajorForum />,
            loader: forumLoader,
          },
          {
            path: "/colleges/:collegeId/majors/:majorId/posts/:postId",
            element: <ForumPost />,
            loader: forumPostLoader,
          },
          {
            path: "/colleges/:collegeId/majors/:majorId/create-post",
            element: 
            <ProtectedRoute>
            <CreatePost />,
            </ProtectedRoute>,
            action: createPostAction,
          },
          {
            path: "/colleges/:collegeId/majors/:majorId/posts/:postId/delete",
            action: deletePostAction,
          },
          {
            path: "/colleges/:collegeId/majors/:majorId/posts/:postId/edit",
            element: <EditPost />,
            loader: editPostLoader,
            action: editPostAction,
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