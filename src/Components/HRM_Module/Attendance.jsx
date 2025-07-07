import React, { useState } from "react";

const Attendance = () => {
  const [time] = useState("10:30 AM");
  const [status] = useState("Checked In");
  const [month] = useState("July 2025");

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const daysInView = [
    30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 1, 2, 3, 4,
  ];

  // Function to return style based on day status (updated to match new image)
  const getDayStyle = (day) => {
    if (day === 6) return "bg-red-500 text-white";       // Absent
    if (day === 13) return "bg-orange-500 text-white";   // On Leave
    if ([1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].includes(day))
      return "bg-green-500 text-white"; // Present
    return "bg-gray-200 text-gray-500";                 // Placeholder days
  };

  return (
    <main className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Attendance Overview</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <section className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <div className="flex justify-between items-center mb-4">
            <select
              id="month"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>{month}</option>
              {/* Add more months here */}
            </select>
            <button className="text-gray-500 hover:text-gray-700"></button>
            <button className="text-gray-500 hover:text-gray-700"></button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-sm font-semibold text-gray-600">
            {weekdays.map((day) => (
              <div key={day} className="text-center py-2">{day}</div>
            ))}

            {daysInView.map((day, idx) => (
              <div
                key={`${day}-${idx}`}
                className={`p-2 text-center rounded-lg ${getDayStyle(day)}`}
              >
                {day}
              </div>
            ))}
          </div>
        </section>

        {/* Check-in Status */}
        <section className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Check-in Status</h3>
            <p className="mb-2"><span className="font-semibold">Time:</span> {time}</p>
            <p><span className="font-semibold">Status:</span> {status}</p>
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-200">
            Check Out
          </button>
        </section>

        {/* Legend */}
        <section className="bg-white p-6 rounded-lg shadow-md lg:col-start-2 lg:col-end-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Legend</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-4 bg-green-500 rounded-full inline-block"></span> Present
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-4 bg-red-500 rounded-full inline-block"></span> Absent
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-orange-500 rounded-full inline-block"></span> On Leave
          </div>
        </section>
      </div>
    </main>
  );
};

export default Attendance;