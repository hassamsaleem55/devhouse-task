import { useState } from "react";
import { Link } from "react-router";
import PageLayout from "../layouts/PageLayout";
import ContestCard from "../components/ContestCard";
import { contestsData } from "../store/Contests.data";

function Contests() {
  const tabs = [
    { id: "ongoing", label: "Ongoing" },
    { id: "archived", label: "Archived" },
  ];

  const [activeTab, setActiveTab] = useState<string>("archived");
  return (
    <PageLayout
      pageTitle="Contests"
      btn={{ text: "Create New Contest", navigate: "/contests/new" }}
    >
      <div className="tabs-container">
        {/* Tab Headers */}
        <div className="flex gap-8 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-md font-semibold border-b-2 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "text-gray-900 border-gray-900"
                  : " border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content-area space-y-4">
          {contestsData.map((item: any) => {
            if (item.category === activeTab) {
              return (
                <div
                  key={item.category}
                  id={item.category}
                  className="tab-pane"
                >
                  {item.data.map((contest: any, index: number) => (
                    <Link
                      to={`details/${item.category}/${contest.contestNumber}`}
                      key={index}
                    >
                      <ContestCard
                        heading={`Contest ${contest.contestNumber}`}
                        date={contest.date}
                        description={contest.description}
                        imageSrc={contest.imageSrc}
                      />
                    </Link>
                  ))}
                </div>
              );
            }
          })}
        </div>
      </div>
    </PageLayout>
  );
}

export default Contests;
