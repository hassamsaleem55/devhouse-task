import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Contests from "./pages/Contests";
import MainPage from "./pages/MainPage";
import NewContest from "./pages/NewContest";
import ContestDetails from "./pages/ContestDetails";

const router = createBrowserRouter([
  {
    index: true,
    element: <MainPage />,
  },
  {
    path: "contests",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Contests />,
      },
      {
        path: "new",
        element: <NewContest />,
      },
      {
        path: "details/:category/:contestNumber",
        element: <ContestDetails />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
