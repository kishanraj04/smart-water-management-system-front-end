import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import TankInformation from "./pages/TankInformation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "tank/tank information",
        element:<TankInformation />,
      }
    ],
  },
]);

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);