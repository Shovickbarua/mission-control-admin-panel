import { useState } from "react";
import { FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router";

const Navbar = ({ isSidebarVisible, setIsSidebarVisible, onOpenMobileSidebar, title }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate("/");
  };

  return (
    <header className="w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-lg sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsSidebarVisible((prev) => !prev)}
          className={`hidden md:inline-flex flex-col justify-center gap-[3px] px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 transition-transform duration-300 ${
            isSidebarVisible ? "" : "-translate-x-1"
          }`}
          aria-label="Toggle sidebar"
        >
          <span className="h-[2px] w-4 bg-slate-800 rounded" />
          <span className="h-[2px] w-4 bg-slate-800 rounded" />
        </button>
        <div className="flex flex-col">
          <p className="text-xs md:text-sm text-slate-500">Control Room</p>
          <h1 className="rajdhani-font text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900">
            {title}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#3CAA7B] to-[#296E49] flex items-center justify-center text-white">
              <FiUser />
            </div>
            <span className="hidden sm:block text-sm font-medium text-slate-700">Admin</span>
          </button>

          {isProfileOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsProfileOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-slate-200 bg-white shadow-xl py-2 z-50 animate-in fade-in zoom-in duration-200">
                <button
                  onClick={() => {
                    navigate("/admin/settings");
                    setIsProfileOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <FiSettings className="text-slate-400" />
                  <span>Profile Settings</span>
                </button>
                <div className="h-px bg-slate-100 my-1" />
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <FiLogOut className="text-red-400" />
                  <span>Logout</span>
                </button>
              </div>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={onOpenMobileSidebar}
          className="md:hidden inline-flex flex-col justify-center gap-[3px] px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800"
          aria-label="Open navigation"
        >
          <span className="h-[2px] w-5 bg-slate-800 rounded" />
          <span className="h-[2px] w-5 bg-slate-800 rounded" />
          <span className="h-[2px] w-5 bg-slate-800 rounded" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
