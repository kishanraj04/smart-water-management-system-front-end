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
import Functionality from "./pages/Functionality.jsx";
import Alerts from "./pages/Alerts.jsx";
import WaterAlert from "./pages/WaterAlert.jsx";
import SensorAlert from "./pages/SensorAlert.jsx";
import NetworkAlert from "./pages/NetworkAlert.jsx";
import WaterReports from "./pages/WaterReports.jsx";
import SensorReports from "./pages/SensorReports.jsx";
import NetworkReports from "./pages/NetworkReports.jsx";
import Profile from "./pages/Profile.jsx";

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
      },
      {
        path: "features/functionality",
        element:<Functionality />,
      },
      {
        path: "alert/All Alert",
        element:<Alerts />,
      },
      {
        path:"alert/water alert",
        element:<WaterAlert/>,
      },
      {
        path:"alert/sensor alert",
        element:<SensorAlert/>,
      },
      {
        path:"alert/network alert",
        element:<NetworkAlert/>,
      },
      {
        path: "reports/water reports",
        element:<WaterReports/>
      },
      {
        path: "reports/sensor reports",
        element:<SensorReports/>
      },
      {
        path: "reports/network reports",
        element:<NetworkReports/>
      },
      {
        path:"profile/profile",
        element:<Profile/>
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