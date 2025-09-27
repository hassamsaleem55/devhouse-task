import { Link } from "react-router";
import CompanyLogo from "../components/CompanyLogo";
import { BtnCreateNew } from "../components/Form";

function AppSidebar() {
  const LINKS = [
    {
      id: 1,
      items: [
        { to: "/contests", label: "Contests", active: true },
        { to: "#", label: "User Management", active: false },
        { to: "#", label: "Marketing Campaigns", active: false },
        { to: "#", label: "Leaderboard Control", active: false },
        { to: "#", label: "Analytics", active: false },
      ],
    },
    {
      id: 2,
      items: [
        { to: "#", label: "Notifications", active: false },
        { to: "#", label: "Security", active: false },
        { to: "#", label: "Feedback & Support", active: false },
      ],
    },
  ];

  return (
    <aside className="w-60 h-screen fixed top-0 left-0 bg-basic text-white p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-20">
        <CompanyLogo />
      </div>
      <div className="mb-8 text-xs">
        <Link to="/contests/new">
          <BtnCreateNew text="Create New Contest" />
        </Link>
      </div>
      {/* Nav (later expandable) */}
      <nav className="flex-1 space-y-4 text-xs">
        {LINKS.map((navLink) => {
          return (
            <div
              key={navLink.id}
              className="space-y-2 border-t border-gray-700 pt-4"
            >
              {navLink.items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      item.active
                        ? "font-semibold"
                        : "font-normal text-gray-400"
                    }
                  >
                    <Link
                      to={item.to}
                      className="block px-2 py-2 rounded hover:bg-primary hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default AppSidebar;
