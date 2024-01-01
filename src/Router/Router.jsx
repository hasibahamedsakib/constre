import { createBrowserRouter } from "react-router-dom";

// Home And Main Home1
import Main3 from "../Main/Main3";
import Home3 from "../Pages/Home3/Home3";

// error page
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

// Starting React Router.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main3 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home3 />,
      },
    ],
  },
]);

export default router;
