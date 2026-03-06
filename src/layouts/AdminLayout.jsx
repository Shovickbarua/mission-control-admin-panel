import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const AdminLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobileSidebarClosing, setIsMobileSidebarClosing] = useState(false);
  const location = useLocation();

  const handleOpenMobileSidebar = () => {
    setIsMobileSidebarClosing(false);
    setIsMobileSidebarOpen(true);
  };

  const handleCloseMobileSidebar = () => {
    setIsMobileSidebarClosing(true);
    setTimeout(() => {
      setIsMobileSidebarOpen(false);
      setIsMobileSidebarClosing(false);
    }, 250);
  };

  // Close mobile sidebar on route change
  useEffect(() => {
    if (isMobileSidebarOpen) {
      // Small delay to avoid synchronous state update in effect warning
      const closeTimer = setTimeout(() => {
        setIsMobileSidebarClosing(true);
        const timer = setTimeout(() => {
          setIsMobileSidebarOpen(false);
          setIsMobileSidebarClosing(false);
        }, 250);
        return () => clearTimeout(timer);
      }, 0);
      return () => clearTimeout(closeTimer);
    }
  }, [location.pathname, isMobileSidebarOpen]);

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/admin") return "Dashboard";
    if (path === "/admin/crew") return "Crew Management";
    if (path === "/admin/missions") return "Missions";
    if (path === "/admin/settings") return "Settings";
    return "Mission Control";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 flex flex-col md:flex-row">
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        isMobileSidebarOpen={isMobileSidebarOpen}
        isMobileSidebarClosing={isMobileSidebarClosing}
        onCloseMobileSidebar={handleCloseMobileSidebar}
      />

      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
          onOpenMobileSidebar={handleOpenMobileSidebar}
          title={getPageTitle()}
        />

        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 flex flex-col gap-6 md:gap-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
