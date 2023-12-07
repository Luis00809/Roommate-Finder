import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Uh Oh!</h1>, // this can be replaced with an error page
    children: [
      {
        index: true,
        element: <AllCommunities />,
      },
      {
        path: "/messages/received",
        element: <Messages />,
      },
      {
        path: "/messages/sent",
        element: <Messages />,
      },
      {
        path: "my-communities",
        element: <MyCommunities />,
      },
      {
        path: "/communities/:communityId",
        element: <MyCommunityItems />,
      },
      {
        path: "/hoard/:id",
        element: <MyHoard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
