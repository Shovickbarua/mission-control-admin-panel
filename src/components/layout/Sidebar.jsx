import { NavLink } from "react-router";
import { FiHome, FiUsers, FiMap, FiSettings } from "react-icons/fi";

const Sidebar = ({ isSidebarVisible, isMobileSidebarOpen, isMobileSidebarClosing, onCloseMobileSidebar }) => {
  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <FiHome /> },
    { name: "Crew", path: "/admin/crew", icon: <FiUsers /> },
    { name: "Missions", path: "/admin/missions", icon: <FiMap /> },
    { name: "Settings", path: "/admin/settings", icon: <FiSettings /> },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#3CAA7B] to-[#296E49]" />
          <div>
            <p className="rajdhani-font text-xl font-semibold text-slate-900">Mission Control</p>
            <p className="text-xs text-slate-500">Admin Panel</p>
          </div>
        </div>
        {isMobileSidebarOpen && (
          <button
            type="button"
            onClick={onCloseMobileSidebar}
            className="md:hidden inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Close navigation"
          >
            ✕
          </button>
        )}
      </div>

      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/admin"}
            onClick={isMobileSidebarOpen ? onCloseMobileSidebar : undefined}
            className={({ isActive }) =>
              `w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-slate-100 border border-slate-300 shadow-sm"
                  : "text-sm text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            {({ isActive }) => isActive && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white">
                Active
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-slate-200">
        <p className="text-xs text-slate-500 mb-1">Logged in as</p>
        <p className="text-sm font-medium text-slate-900 truncate">admin@mission.to</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className="hidden md:block relative transition-all duration-300 ease-in-out shrink-0"
        style={{ width: isSidebarVisible ? "16rem" : "0rem" }}
      >
        <aside
          className={`fixed left-0 top-0 bottom-0 md:flex md:flex-col bg-white border-r border-slate-200 shadow-sm px-6 py-8 overflow-hidden transform transition-all duration-300 ease-in-out ${
            isSidebarVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
          style={{ width: "16rem" }}
        >
          {sidebarContent}
        </aside>
      </div>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
              isMobileSidebarClosing ? "mobile-sidebar-overlay-out" : "mobile-sidebar-overlay"
            }`}
            onClick={onCloseMobileSidebar}
            aria-label="Close navigation overlay"
          />
          <div
            className={`relative z-50 h-full w-64 bg-white border-r border-slate-200 shadow-xl px-6 py-8 flex flex-col transform transition-transform duration-300 ${
              isMobileSidebarClosing ? "mobile-sidebar-panel-out" : "mobile-sidebar-panel"
            }`}
          >
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
