import { ChevronDown } from "lucide-react";
import BellIcon from "../components/BellIcon";

function AppHeader() {
  return (
    <header className="h-20 px-8 flex items-center justify-end gap-4">
      {/* Bell Section */}
      <div className="flex h-10 border-r border-gray-300 pr-4 items-center justify-end gap-6">
        <BellIcon />
      </div>

      {/* Avatar + User Info Section */}
      <div className="flex items-center gap-2 font-semibold justify-between">
        {/* Avatar */}
        <div className="w-10 h-10 bg-gray-200 text-gray-400 flex items-center justify-center rounded-full">
          PD
        </div>

        {/* User Info */}
        <div className="leading-tight flex flex-col">
          <div className="text-gray-400 text-xxs">Admin</div>
          <div className="text-sm flex items-center gap-10">
            Prerit Das
            <ChevronDown size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
