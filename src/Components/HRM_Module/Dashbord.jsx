import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data for dashboard metrics
  const metrics = [
    { title: "Total Employees", value: 120, icon: "👥", link: "/hrm/employees" },
    { title: "Attendance Rate", value: "92%", icon: "📅", link: "/hrm/attendance" },
    { title: "Pending Leaves", value: 8, icon: "🍃", link: "/hrm/leaves" },
    { title: "Payroll Due", value: "3 Days", icon: "💰", link: "/hrm/payroll" },
  ];

  // Mock data for recent activities
  const recentActivities = [
    { id: 1, employee: "John Doe", action: "Submitted leave request", date: "2025-07-04" },
    { id: 2, employee: "Jane Smith", action: "Clocked in", date: "2025-07-04" },
    { id: 3, employee: "Bob Johnson", action: "Added as new employee", date: "2025-07-03" },
  ];

  // Event data (anniversaries, festivals, birthdays)
  const currentDate = new Date("2025-07-08"); // Current date
  const anniversaries = [
    { name: "YNK Anniversary", date: "11th November" },
  ];

  const festivals = [
    { name: "Gudipadwa" },
    { name: "Independence Day", date: "15th August" },
    { name: "Ganesh Chaturthi" },
    { name: "Diwali" },
    { name: "Vijaya Dashami (Dussehra)" },
    { name: "Republic Day", date: "26th January" },
    { name: "Yogini Ekadashi" },
    { name: "Maharashtra Day", date: "1st May" },
    { name: "Gandhi Jayanti", date: "2nd October" },
    { name: "Women's Day", date: "8th March" },
  ];

  const directors = [
    { name: "Navnath Sir", dob: "7th October" },
    { name: "Vishwas Sir", dob: "7th March" },
    { name: "Amar Sir", dob: "17th February" },
    { name: "Amol Sir", dob: "21st November" },
    { name: "Datta Sir", dob: "2nd June" },
  ];

  const employees = [
    { name: "Dipak Gayakar Sir", dob: "27/05/1987" },
    { name: "Mauli Jadhav Sir", dob: "18/04/1999" },
    { name: "Sainath Kamble", dob: "07-01-1996" },
    { name: "Prashant Hanwate", dob: "08-07-1990" },
    { name: "Shubham Pund", dob: "26/11/2000" },
    { name: "Sainath Jorgewar", dob: "24/11/1999" },
    { name: "Sayali More Ma'am", dob: "23/04/2001" },
    { name: "Mukeshkumar Koli Sir", dob: "16/09/2001" },
    { name: "Rinkoo Shakya Sir", dob: "11-01-1999" },
    { name: "Santoshi Ganjare Ma'am", dob: "18/09/1988" },
    { name: "Madhuri Pangare Ma'am", dob: "28/01/1990" },
    { name: "Aboli Sawant Ma'am", dob: "20/02/1993" },
    { name: "Bhushan Devrukhkar Sir", dob: "12-05-1988" },
    { name: "Vicky Ingle Sir", dob: "15/08/1999" },
    { name: "Pooja Lamdade Ma'am", dob: "26/11/1998" },
    { name: "Nilam Bhosale Ma'am", dob: "16/03/1998" },
  ];

  // Helper function to parse dates and create event objects
  const parseDate = (dateStr, type, name) => {
    if (!dateStr) return null;
    let day, month;
    if (dateStr.includes("/")) {
      // Format: DD/MM/YYYY or DD-MM-YYYY
      const parts = dateStr.includes("/") ? dateStr.split("/") : dateStr.split("-");
      day = parseInt(parts[0], 10);
      month = parseInt(parts[1], 10) - 1; // Months are 0-based in JS
    } else {
      // Format: "DDth Month" (e.g., "11th November")
      const match = dateStr.match(/^(\d{1,2})(?:st|nd|rd|th)?\s(\w+)/);
      if (match) {
        day = parseInt(match[1], 10);
        const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        month = monthNames.indexOf(match[2]);
      } else {
        return null;
      }
    }
    return { name, type, date: new Date(2025, month, day) };
  };

  // Combine all events
  const allEvents = [
    ...anniversaries.map(a => parseDate(a.date, "Anniversary", a.name)).filter(Boolean),
    ...festivals
      .map(f => parseDate(f.date, "Festival", f.name))
      .filter(Boolean), // Filter out festivals without dates
    ...directors.map(d => parseDate(d.dob, "Director Birthday", d.name)).filter(Boolean),
    ...employees.map(e => parseDate(e.dob, "Employee Birthday", e.name)).filter(Boolean),
  ];

  // Sort events by date and filter upcoming events (within 30 days)
  const upcomingEvents = allEvents
    .filter(event => {
      const diffTime = event.date - currentDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 30; // Events in the next 30 days
    })
    .sort((a, b) => a.date - b.date);

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">HRM Dashboard</h2>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <Link
            key={index}
            to={metric.link}
            className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition"
          >
            <div className="flex items-center">
              <span className="text-3xl mr-4">{metric.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{metric.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Upcoming Events (Next 30 Days)</h3>
        {upcomingEvents.length > 0 ? (
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Event</th>
                <th className="p-2">Type</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {upcomingEvents.map((event, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{event.name}</td>
                  <td className="p-2">{event.type}</td>
                  <td className="p-2">{event.date.toLocaleDateString("en-GB", { day: "numeric", month: "long" })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No events in the next 30 days.</p>
        )}
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Activities</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Employee</th>
              <th className="p-2">Action</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((activity) => (
              <tr key={activity.id} className="border-b">
                <td className="p-2">{activity.employee}</td>
                <td className="p-2">{activity.action}</td>
                <td className="p-2">{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;