import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./Layout";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
