import { Link } from "react-router";
import CompanyLogo from "../components/CompanyLogo";

function Sidebar() {
  const links = [
    {
      "section-1": [
        { to: "/contests", label: "Contests" },
        { to: "#", label: "User Management" },
        { to: "#", label: "Marketing Compaigns" },
        { to: "#", label: "Leaderboard Control" },
        { to: "#", label: "Analytics" },
      ],
    },
    {
      "section-2": [
        { to: "#", label: "Notifications" },
        { to: "#", label: "Security" },
        { to: "#", label: "Feedback & Support" },
      ],
    },
  ];
  
  return (
    <aside className="w-60 h-screen fixed top-0 left-0 bg-basic text-white p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-20">
        <CompanyLogo />
      </div>

      {/* Nav (later expandable) */}
      <nav className="flex-1 space-y-4">
        <Link
          to="/contests"
          className="block px-2 py-2 rounded hover:bg-primary"
        >
          Contests
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
