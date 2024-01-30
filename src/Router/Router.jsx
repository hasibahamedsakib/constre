import { createBrowserRouter } from "react-router-dom";

// Home And Main Home1
import Main3 from "../Main/Main3";
import Home3 from "../Pages/Home3/Home3";

// error page
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Main1 from "../Main/Main1";
import Home1 from "../Pages/Home1/Home1";

// Starting React Router.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main1 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
    ],
  },
  {
    path: "/home3",
    element: <Main3 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home3",
        element: <Home3 />,
      },
    ],
  },
]);

export default router;
