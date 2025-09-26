import { ChevronDown } from "lucide-react";
import BellIcon from "../components/BellIcon";

function AdminHeader() {
  return (
    <header className="h-20 px-8 flex items-center justify-between bg-white">
      {/* Left placeholder (breadcrumbs / search / etc. later) */}
      <div></div>

      {/* Right user controls */}
      <div className="flex items-center gap-6">
        <BellIcon />

        <div className="flex items-center gap-2 font-semibold">
          {/* Avatar */}
          <div className="w-10 h-10 bg-gray-200 text-gray-600 flex items-center justify-center rounded-full">
            PD
          </div>

          {/* User Info */}
          <div className="leading-tight">
            <div className="text-gray-500 text-xxs">Admin</div>
            <div className="text-md flex items-center gap-2">
              Prerit Das
              <ChevronDown size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
