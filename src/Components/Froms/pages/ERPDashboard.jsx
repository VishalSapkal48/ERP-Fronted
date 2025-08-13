import React, { useState, useEffect } from "react";
import CustomCalendar from "./CustomCalendar";
//import Navbar from "./Navbar";
import logo from "../../../../public/Images/BoardWorksListForm/logo.png";

const Modal = ({ open, onClose, onSave, task }) => {
  const [form, setForm] = useState(task || {});

  useEffect(() => {
    setForm(task || {});
  }, [task]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">Edit Task</h2>
        <div
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSave(form);
          }}
        >
          <input
            type="text"
            value={form.title || ""}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Task Title"
            className="w-full p-2 border border-gray-200 rounded"
            required
          />
          <select
            value={form.type || "General"}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full p-2 border border-gray-200 rounded"
          >
            <option value="General">General</option>
            <option value="Meeting">Meeting</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="date"
            value={form.dueDate || ""}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
            className="w-full p-2 border border-gray-200 rounded"
            required
          />
          <input
            type="text"
            value={form.time || ""}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            placeholder="Time (optional)"
            className="w-full p-2 border border-gray-200 rounded"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileComponent = () => (
  <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
    <span className="text-white font-bold text-lg">U</span>
  </div>
);

const CurrentDateTime = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const formatDate = now.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formatTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="text-right text-xs md:text-sm mr-2">
      <div className="text-gray-700 font-semibold">{formatDate}</div>
      <div className="text-gray-400">{formatTime}</div>
    </div>
  );
};

const ERPDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Jio Mart",
      type: "Meeting",
      dueDate: "2025-07-12",
      time: "-",
      status: "completed",
    },
    {
      id: "2",
      title: "Dmart",
      type: "Meeting",
      dueDate: "2025-07-12",
      time: "16:52",
      status: "pending",
    },
    {
      id: "3",
      title: "Birla Cement",
      type: "Meeting",
      dueDate: "2025-07-12",
      time: "13:54",
      status: "pending",
    },
  ]);
  const [priorityTasks, setPriorityTasks] = useState([
    {
      id: "4",
      title: "Task",
      type: "Other",
      dueDate: "2025-07-12",
      time: "-",
      status: "completed",
    },
    {
      id: "5",
      title: "Civil Meeting",
      type: "Meeting",
      dueDate: "2025-07-12",
      time: "14:52",
      status: "pending",
    },
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    type: "General",
    dueDate: "",
    priority: false,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [notification, setNotification] = useState(true);

  const statistics = [200, 300, -20, 100, 50];

  const events = [...tasks, ...priorityTasks].map((task) => ({
    ...task,
    date: new Date(task.dueDate),
  }));

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.dueDate) {
      const task = {
        id: String(Date.now()),
        title: newTask.title,
        type: newTask.type,
        dueDate: newTask.dueDate,
        time: "-",
        status: "pending",
      };
      if (newTask.priority) {
        setPriorityTasks([...priorityTasks, task]);
      } else {
        setTasks([...tasks, task]);
      }
      setNewTask({
        title: "",
        type: "General",
        dueDate: "",
        priority: false,
      });
    }
  };

  const handleEdit = (task, isPriority) => {
    setEditTask({ ...task, isPriority });
    setModalOpen(true);
  };

  const handleSaveEdit = (updatedTask) => {
    if (editTask.isPriority) {
      setPriorityTasks((prev) =>
        prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );
    } else {
      setTasks((prev) =>
        prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );
    }
    setModalOpen(false);
    setEditTask(null);
  };

  const handleComplete = (id, isPriority) => {
    if (isPriority) {
      setPriorityTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, status: "completed" } : t))
      );
    } else {
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, status: "completed" } : t))
      );
    }
  };

  const handleDismiss = () => setNotification(false);

  const eventsOnSelectedDate = events.filter(
    (event) => event.dueDate === selectedDate.toISOString().slice(0, 10)
  );

  return (
    <div className="flex flex-col overflow-hidden min-h-screen">
      <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          {notification && (
            <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-300 p-4 rounded-xl shadow-sm">
              <span className="text-yellow-800 font-medium flex items-center gap-2">
                <span className="text-xl">⏰</span>
                Upcoming Meetings: <b>Meeting php#xfgfddddd</b> at <b>13:54</b>{" "}
                on <b>12/07/2025</b>
              </span>
              <button
                onClick={handleDismiss}
                className="text-yellow-600 hover:text-yellow-800 font-semibold transition px-3 py-1 rounded hover:bg-yellow-200"
              >
                Dismiss
              </button>
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {statistics.map((value, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition hover:scale-105 duration-200 ${
                  value < 0 ? "border-red-200" : "border-green-200"
                } border`}
              >
                <div
                  className={`w-4 h-4 mb-2 rounded-full ${
                    value < 0 ? "bg-red-500" : "bg-green-500"
                  }`}
                ></div>
                <div
                  className={`font-bold text-lg ${
                    value < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {value >= 0 ? `+${value}` : value}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Metric {idx + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                <span className="w-5 h-5 bg-blue-500 rounded-full mr-2"></span>
                Add New Task
              </h3>
              <div onSubmit={handleAddTask} className="space-y-4">
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                  placeholder="Enter task title"
                  className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-200"
                />
                <select
                  value={newTask.type}
                  onChange={(e) =>
                    setNewTask({ ...newTask, type: e.target.value })
                  }
                  className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-200"
                >
                  <option value="General">General</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) =>
                    setNewTask({ ...newTask, dueDate: e.target.value })
                  }
                  className="w-full p-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-200"
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newTask.priority}
                    onChange={(e) =>
                      setNewTask({ ...newTask, priority: e.target.checked })
                    }
                    className="mr-2"
                  />
                  <span className="text-gray-700">Priority Task</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition"
                >
                  Add Task
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                <span className="w-5 h-5 bg-blue-500 rounded-full mr-2"></span>
                Tasks
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="py-2 px-4 text-gray-600 font-medium">
                        Task
                      </th>
                      <th className="py-2 px-4 text-gray-600 font-medium">
                        Type
                      </th>
                      <th className="py-2 px-4 text-gray-600 font-medium">
                        Due Date
                      </th>
                      <th className="py-2 px-4 text-gray-600 font-medium">
                        Time
                      </th>
                      <th className="py-2 px-4 text-gray-600 font-medium">
                        Status
                      </th>
                      <th className="py-2 px-4 text-gray-600 font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task) => (
                      <tr
                        key={task.id}
                        className="border-b hover:bg-blue-50 transition"
                      >
                        <td className="py-2 px-4">{task.title}</td>
                        <td className="py-2 px-4">{task.type}</td>
                        <td className="py-2 px-4">{task.dueDate}</td>
                        <td className="py-2 px-4">{task.time}</td>
                        <td className="py-2 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              task.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {task.status.charAt(0).toUpperCase() +
                              task.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-2 px-4 flex gap-2">
                          <button
                            onClick={() => handleEdit(task, false)}
                            className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-100"
                            title="Edit"
                          >
                            📝
                          </button>
                          <button
                            onClick={() => handleComplete(task.id, false)}
                            className="text-green-600 hover:text-green-800 px-2 py-1 rounded hover:bg-green-100"
                            title="Mark as Complete"
                            disabled={task.status === "completed"}
                          >
                            ✔
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
              <span className="w-5 h-5 bg-red-500 rounded-full mr-2"></span>
              Priority Tasks
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="pb-2 text-gray-600">Task</th>
                    <th className="pb-2 text-gray-600">Type</th>
                    <th className="pb-2 text-gray-600">Due Date</th>
                    <th className="pb-2 text-gray-600">Time</th>
                    <th className="pb-2 text-gray-600">Status</th>
                    <th className="pb-2 text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {priorityTasks.map((task) => (
                    <tr
                      key={task.id}
                      className="border-b hover:bg-red-50 transition"
                    >
                      <td className="py-2">{task.title}</td>
                      <td className="py-2">{task.type}</td>
                      <td className="py-2">{task.dueDate}</td>
                      <td className="py-2">{task.time}</td>
                      <td className="py-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            task.status === "completed"
                              ? "bg-green-200 text-green-800"
                              : "bg-yellow-200 text-yellow-800"
                          }`}
                        >
                          {task.status}
                        </span>
                      </td>
                      <td className="py-2 flex gap-2">
                        <button
                          onClick={() => handleEdit(task, true)}
                          className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-100"
                          title="Edit"
                        >
                          📝
                        </button>
                        <button
                          onClick={() => handleComplete(task.id, true)}
                          className="text-green-600 hover:text-green-800 px-2 py-1 rounded hover:bg-green-100"
                          title="Mark as Complete"
                          disabled={task.status === "completed"}
                        >
                          ✔
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">
                Event Calendar
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <CustomCalendar
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                  events={events}
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">
                Events on{" "}
                {selectedDate.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </h3>
              {eventsOnSelectedDate.length === 0 ? (
                <p className="text-gray-500">No events on this date.</p>
              ) : (
                <ul className="space-y-2">
                  {eventsOnSelectedDate.map((event) => (
                    <li key={event.id} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="font-medium">{event.title}</span>
                      <span className="text-xs text-gray-500">
                        {event.type}
                      </span>
                      <span className="text-xs text-gray-400">
                        {event.time}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              Upcoming Events (Next 30 Days)
            </h3>
            <p className="text-gray-500">No events in the next 30 days.</p>
          </div>
        </div>
      </main>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveEdit}
        task={editTask}
      />
    </div>
  );
};

export default ERPDashboard;