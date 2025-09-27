import { Outlet } from "react-router";
import AppHeader from "../sections/AppHeader";
import AppSidebar from "../sections/AppSidebar";

function AppLayout() {
  return (
    <div className="font-basic w-screen h-screen bg-white flex">
      <AppSidebar />
      <div className="flex flex-col flex-1 ml-60">
        <AppHeader />
        <main className="flex-1 px-8 py-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
