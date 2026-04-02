import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Crew from "../pages/admin/Crew";
import Missions from "../pages/admin/Missions";
import Settings from "../pages/admin/Settings";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Admin Nested Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="crew" element={<Crew />} />
          <Route path="missions" element={<Missions />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Redirect any other path to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
