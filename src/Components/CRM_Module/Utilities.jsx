import { useState } from "react";

function Utilities() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("Calendar");

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, () => null);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Utilities</h2>
      <div className="flex mb-4">
        {["Calendar", "Export", "Media", "Logs", "Announcement", "Backup"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 mr-2 rounded ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>
      {activeTab === "Calendar" && (
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h3>
          <div className="grid grid-cols-7 gap-1 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-bold">
                {day}
              </div>
            ))}
            {blanks.map((_, i) => (
              <div key={`blank-${i}`} className="p-2"></div>
            ))}
            {days.map((day) => (
              <div key={day} className="p-2 border hover:bg-gray-100">
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab !== "Calendar" && (
        <div className="p-4">Feature for {activeTab} coming soon!</div>
      )}
    </div>
  );
}

export default Utilities;
