import { useState } from "react";
import { BtnCreateNew } from "../components/Form";
import ContestCard from "../components/ContestCard";

function Contests() {
  const tabs = [
    { id: "ongoing", label: "Ongoing" },
    { id: "archived", label: "Archived" },
  ];

  const [activeTab, setActiveTab] = useState<string>("archived");
  const renderContests = (count: number = 5) => {
    const cards = [];
    for (let index = 1; index <= count; index++) {
      cards.push(<ContestCard key={index} contestNumber={index} />);
    }
    return cards;
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold">Contests</h1>
        <BtnCreateNew label="Contest" />
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        {/* Tab Headers */}
        <div className="flex gap-8 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg font-semibold border-b-2 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "border-base font-bold text-base"
                  : "border-transparent text-gray-500 hover:text-basic hover:border-basic"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content-area space-y-4">
          {activeTab === "ongoing" && (
            <div id="ongoing" className="tab-pane">
              {renderContests(5)}
            </div>
          )}

          {activeTab === "archived" && (
            <div id="archived" className="tab-pane">
              {renderContests(3)} {/* Example: fewer archived contests */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contests;
