import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";
import Landing from "./pages/Landing";
import Contests from "./pages/Contests";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "contests",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Contests />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
