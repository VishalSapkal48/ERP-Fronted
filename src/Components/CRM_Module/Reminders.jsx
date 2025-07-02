import { useState } from "react";

function Reminders() {
  const [reminders, setReminders] = useState([
    { id: 1, title: "Call John", date: "2025-07-05", time: "10:00" },
    { id: 2, title: "Send proposal", date: "2025-07-06", time: "14:00" },
  ]);
  const [newReminder, setNewReminder] = useState({
    title: "",
    date: "",
    time: "",
  });

  const handleAddReminder = (e) => {
    e.preventDefault();
    if (!newReminder.title || !newReminder.date || !newReminder.time) return;
    setReminders([...reminders, { id: reminders.length + 1, ...newReminder }]);
    setNewReminder({ title: "", date: "", time: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Reminders</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Set New Reminder</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddReminder}
        >
          <input
            type="text"
            placeholder="Reminder Title"
            value={newReminder.title}
            onChange={(e) =>
              setNewReminder({ ...newReminder, title: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={newReminder.date}
            onChange={(e) =>
              setNewReminder({ ...newReminder, date: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="time"
            value={newReminder.time}
            onChange={(e) =>
              setNewReminder({ ...newReminder, time: e.target.value })
            }
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
          >
            Add Reminder
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Time</th>
            </tr>
          </thead>
          <tbody>
            {reminders.map((reminder) => (
              <tr key={reminder.id} className="hover:bg-gray-50">
                <td className="p-2 border">{reminder.id}</td>
                <td className="p-2 border">{reminder.title}</td>
                <td className="p-2 border">{reminder.date}</td>
                <td className="p-2 border">{reminder.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reminders;
