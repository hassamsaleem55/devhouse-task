import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="font-basic">
      <Outlet />
    </div>
  );
}

export default Layout;
