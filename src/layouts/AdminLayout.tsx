import { Outlet } from "react-router";
import AdminHeader from "../sections/AdminHeader";
import Sidebar from "../sections/Sidebar";
import AdminMain from "../sections/AdminMain";

function AdminLayout() {
  return (
    <div className="w-screen h-screen bg-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 ml-60">
        <AdminHeader />
        <AdminMain>
          <Outlet />
        </AdminMain>
      </div>
    </div>
  );
}

export default AdminLayout;
