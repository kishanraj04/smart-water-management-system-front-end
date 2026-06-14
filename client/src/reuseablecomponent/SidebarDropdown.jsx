import { NavLink } from "react-router-dom";

export default function SidebarDropdown({
  title,
  isOpen,
  onToggle,
  items,
  basePath,
}) {
  return (
    <li>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-slate-800 transition"
      >
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul className="mt-2 ml-4 space-y-1">
          {items.map((item) => (
            <li key={item}>
              <NavLink
                to={`${basePath}/${item}`}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}