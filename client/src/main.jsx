import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import HomePage from "./pages/Homepage.jsx";
import DashBoard from "./pages/Dashboard.jsx";
import RoomListings from "./pages/RoomListings.jsx";
import Roommates from "./pages/Roommates.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Uh Oh!</h1>, // this can be replaced with an error page
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/roomlistings",
        element: <RoomListings />,
      },
      {
        path: "/roommates",
        element: <Roommates />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
