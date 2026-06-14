import { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarDropdown from "../reuseablecomponent/SidebarDropdown";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const menuConfig = [
    {
      title: "Connection",
      key: "connection",
      basePath: "/connection",
      items: ["Test Your Connection"],
    },
    {
      title: "Tank",
      key: "tank",
      basePath: "/tank",
      items: ["Tank Information"],
    },
    {
      title: "Features",
      key: "features",
      basePath: "/features",
      items: ["Functionality"],
    },
    {
      title: "Alerts",
      key: "alert",
      basePath: "/alert",
      items: ["All Alert", "Water Alert", "Sensor Alert", "Network Alert"],
    },
    {
      title: "Reports",
      key: "reports",
      basePath: "/reports",
      items: ["Water Reports","Sensor Reports", "Network Reports"],
    },
    {
      title: "Profile",
      key: "profile",
      basePath: "/profile",
      items: ["Profile"],
    },
  ];

  return (
    <div className="w-60 bg-slate-900 text-white fixed top-[80px] left-0 shadow-lg z-50">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-700">
        <h2 className="text-2xl font-bold">Menu</h2>
      </div>

      {/* Menu */}
      <div className="p-2">
        <ul className="h-[70vh] overflow-y-auto hide-scrollbar space-y-2">
          {" "}
          {/* Dashboard */}
          <li>
            <NavLink
              to="/dashboard"
              className="block px-4 py-4 rounded-lg hover:bg-slate-800 transition"
            >
              Dashboard
            </NavLink>
          </li>
          {/* Dynamic Menus */}
          {menuConfig.map((menu) => (
            <SidebarDropdown
              key={menu.key}
              title={menu.title}
              isOpen={openMenu === menu.key}
              onToggle={() => toggleMenu(menu.key)}
              items={menu.items}
              basePath={menu.basePath}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
