import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Edit, CheckCircle, XCircle, Trash2, Bell, CheckSquare } from "lucide-react";
import CustomCalendar from "./CustomCalendar";
import hrmApi from "../../ApiCalling/Hrm_Api";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [priorityTasks, setPriorityTasks] = useState([]);
  const [workTasks, setWorkTasks] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [loadingAction, setLoadingAction] = useState(false);
  const [errorEvents, setErrorEvents] = useState(null);
  const [errorTasks, setErrorTasks] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    type: "General",
    dueDate: new Date().toISOString().split("T")[0],
    time: "",
    priority: false,
  });
  const [taskError, setTaskError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [attendance, setAttendance] = useState({
    checkIn: "",
    checkOut: "",
    checkInLocation: null,
    checkOutLocation: null,
    date: new Date().toISOString().split("T")[0],
    status: "present",
  });
  const [attendanceMessage, setAttendanceMessage] = useState("");
  const [attendanceError, setAttendanceError] = useState(null);

  // Request browser notification permission on component mount
  useEffect(() => {
    if (Notification.permission !== "granted" && Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  }, []);

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoadingEvents(true);
        const data = await hrmApi.getEvents();
        setEvents(data.map(event => ({ ...event, date: new Date(event.date) })));
        setLoadingEvents(false);
      } catch (error) {
        console.error("Fetch Events Error:", error.response?.data || error);
        setErrorEvents("Failed to fetch events. Please try again.");
        setLoadingEvents(false);
      }
    };
    fetchEvents();
  }, []);

  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoadingTasks(true);
        const data = await hrmApi.getTasks();
        setTasks(data);
        setPriorityTasks(data.filter(task => task.priority === true));
        setWorkTasks(data.filter(task => task.priority === false));
        setLoadingTasks(false);
      } catch (error) {
        console.error("Fetch Tasks Error:", error.response?.data || error);
        setErrorTasks("Failed to fetch tasks. Please try again.");
        setLoadingTasks(false);
      }
    };
    fetchTasks();
  }, []);

  // Check for upcoming meetings and trigger notifications
  useEffect(() => {
    const checkUpcomingMeetings = () => {
      const now = new Date();
      const upcomingMeetings = tasks.filter(task => {
        if (task.type === "Meeting" && task.status === "pending" && task.time) {
          const [hours, minutes] = task.time.split(":").map(Number);
          const taskDateTime = new Date(task.dueDate);
          taskDateTime.setHours(hours, minutes, 0, 0);
          const diffMinutes = (taskDateTime - now) / (1000 * 60);
          return diffMinutes > 0 && diffMinutes <= 30;
        }
        return false;
      });

      const newNotifications = upcomingMeetings.map(task => ({
        id: task._id,
        message: `Meeting "${task.title}" is starting at ${task.time} on ${new Date(task.dueDate).toLocaleDateString("en-GB")}`,
      }));

      setNotifications(newNotifications);

      if (Notification.permission === "granted") {
        newNotifications.forEach(notification => {
          new Notification("HRM Dashboard", {
            body: notification.message,
            icon: "/path/to/icon.png", // Replace with your icon path
          });
        });
      }
    };

    checkUpcomingMeetings();
    const interval = setInterval(checkUpcomingMeetings, 60 * 1000);
    return () => clearInterval(interval);
  }, [tasks]);

  // Dismiss notification
  const dismissNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const eventsOnDate = events.filter(
      (event) =>
        event.date.toDateString() === date.toDateString() ||
        (event.type.includes("Birthday") &&
          event.date.getDate() === date.getDate() &&
          event.date.getMonth() === date.getMonth())
    );
    setSelectedEvents(eventsOnDate);
  };

  const getEventColor = (type) => {
    switch (type) {
      case "Festival": return "bg-green-500";
      case "Anniversary": return "bg-purple-500";
      case "Director Birthday": return "bg-red-500";
      case "Employee Birthday": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const upcomingEvents = events
    .filter((event) => {
      const diffTime = event.date - new Date();
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 30;
    })
    .sort((a, b) => a.date - b.date);

  // Handle task action (approve, reject, complete)
  const handleTaskAction = async (taskId, action) => {
    try {
      setLoadingAction(true);
      await hrmApi.updateTask(taskId, { status: action });
      const data = await hrmApi.getTasks();
      setTasks(data);
      setPriorityTasks(data.filter(task => task.priority === true));
      setWorkTasks(data.filter(task => task.priority === false));
      setErrorTasks(null);
      setLoadingAction(false);
    } catch (error) {
      console.error("Task Action Error:", error.response?.data || error);
      setErrorTasks("Failed to update task. Please try again.");
      setLoadingAction(false);
    }
  };

  // Handle edit task
  const handleEditTask = (task) => {
    setEditingTask(task._id);
    setNewTask({
      title: task.title,
      type: task.type,
      dueDate: new Date(task.dueDate).toISOString().split("T")[0],
      time: task.time || "",
      priority: task.priority,
    });
  };

  // Handle update task
  const handleUpdateTask = async (e, taskId) => {
    e.preventDefault();
    if (!newTask.title || !newTask.dueDate || (newTask.type === "Meeting" && !newTask.time)) {
      setTaskError("Title, Due Date, and Time (for Meetings) are required.");
      return;
    }
    try {
      setLoadingAction(true);
      const taskData = {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
      };
      if (newTask.type !== "Meeting") {
        delete taskData.time;
      }
      await hrmApi.updateTask(taskId, taskData);
      const data = await hrmApi.getTasks();
      setTasks(data);
      setPriorityTasks(data.filter(task => task.priority === true));
      setWorkTasks(data.filter(task => task.priority === false));
      setEditingTask(null);
      setNewTask({
        title: "",
        type: "General",
        dueDate: new Date().toISOString().split("T")[0],
        time: "",
        priority: false,
      });
      setTaskError(null);
      setLoadingAction(false);
    } catch (error) {
      console.error("Update Task Error:", error.response?.data || error);
      setTaskError("Failed to update task. Please try again.");
      setLoadingAction(false);
    }
  };

  // Handle delete task
  const handleDeleteTask = async (taskId) => {
    try {
      setLoadingAction(true);
      await hrmApi.deleteTask(taskId);
      const data = await hrmApi.getTasks();
      setTasks(data);
      setPriorityTasks(data.filter(task => task.priority === true));
      setWorkTasks(data.filter(task => task.priority === false));
      setErrorTasks(null);
      setLoadingAction(false);
    } catch (error) {
      console.error("Delete Task Error:", error.response?.data || error);
      setErrorTasks("Failed to delete task. Please try again.");
      setLoadingAction(false);
    }
  };

  // Handle new task input changes
  const handleNewTaskChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle new task submission
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.dueDate || (newTask.type === "Meeting" && !newTask.time)) {
      setTaskError("Title, Due Date, and Time (for Meetings) are required.");
      return;
    }
    try {
      const taskData = {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
      };
      if (newTask.type !== "Meeting") {
        delete taskData.time;
      }
      const createdTask = await hrmApi.createTask(taskData);
      setTasks((prev) => [...prev, createdTask]);
      if (createdTask.priority) {
        setPriorityTasks((prev) => [...prev, createdTask]);
      } else {
        setWorkTasks((prev) => [...prev, createdTask]);
      }
      setNewTask({
        title: "",
        type: "General",
        dueDate: new Date().toISOString().split("T")[0],
        time: "",
        priority: false,
      });
      setTaskError(null);
    } catch (error) {
      console.error("Add Task Error:", error.response?.data || error);
      setTaskError("Failed to add task. Please try again.");
    }
  };

  // Handle attendance check-in/check-out
  const handleAttendanceAction = async (type) => {
    if (loadingAction) return;

    setLoadingAction(true);
    setAttendanceError(null);
    setAttendanceMessage("");

    const now = new Date();
    const time = now.toTimeString().slice(0, 5); // HH:MM format
    const date = now.toISOString().split("T")[0];

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          let updatedAttendance = { ...attendance, date };
          if (type === "checkIn") {
            updatedAttendance = { ...updatedAttendance, checkIn: time, checkInLocation: location };
          } else if (type === "checkOut") {
            if (!attendance.checkIn) {
              setAttendanceError("Please check in before checking out.");
              setLoadingAction(false);
              return;
            }
            updatedAttendance = { ...updatedAttendance, checkOut: time, checkOutLocation: location };
          }

          try {
            await hrmApi.createAttendance({
              ...updatedAttendance,
              employeeId: "currentUserId", // Replace with actual user ID from auth
              status: "present",
            });
            setAttendance(updatedAttendance);
            setAttendanceMessage(`${type === "checkIn" ? "Checked in" : "Checked out"} successfully at ${time}`);
          } catch (error) {
            console.error(`Error ${type}:`, error.response?.data || error);
            setAttendanceError(`Failed to ${type}. Please try again.`);
          } finally {
            setLoadingAction(false);
          }
        },
        (error) => {
          setAttendanceError(`Geolocation error: ${error.message}`);
          setLoadingAction(false);
        }
      );
    } else {
      setAttendanceError("Geolocation is not supported by this browser.");
      setLoadingAction(false);
    }
  };

  return (
    <div className=" p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">HRM Dashboard</h2>

      {/* Notifications Section */}
      {notifications.length > 0 && (
        <div className="mb-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg shadow-md animate-fade-in">
          <h3 className="text-lg font-semibold text-yellow-800 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Upcoming Meetings
          </h3>
          {notifications.map((notification) => (
            <div key={notification.id} className="mt-2 text-yellow-700 flex justify-between items-center">
              <span>{notification.message}</span>
              <button
                onClick={() => dismissNotification(notification.id)}
                className="text-yellow-900 hover:text-yellow-700 font-medium"
              >
                Dismiss
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Attendance Section */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-600" />
          Attendance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => handleAttendanceAction("checkIn")}
            disabled={loadingAction || attendance.checkIn}
            className={`w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2 ${
              loadingAction || attendance.checkIn ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            {loadingAction ? "Checking In..." : "Check In"}
          </button>
          <button
            onClick={() => handleAttendanceAction("checkOut")}
            disabled={loadingAction || !attendance.checkIn || attendance.checkOut}
            className={`w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition font-medium flex items-center justify-center gap-2 ${
              loadingAction || !attendance.checkIn || attendance.checkOut ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <XCircle className="w-5 h-5" />
            {loadingAction ? "Checking Out..." : "Check Out"}
          </button>
        </div>
        {attendanceMessage && (
          <div className="mt-4 bg-green-100 text-green-800 px-4 py-3 rounded-lg">{attendanceMessage}</div>
        )}
        {attendanceError && (
          <div className="mt-4 bg-red-100 text-red-600 px-4 py-3 rounded-lg">{attendanceError}</div>
        )}
      </div>

      {/* Task Sections: Add New Task | Priority & Work Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Add New Task */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-blue-600" />
            {editingTask ? "Edit Task" : "Add New Task"}
          </h3>
          <form onSubmit={(e) => editingTask ? handleUpdateTask(e, editingTask) : handleAddTask(e)} className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="title">
                Task Title
              </label>
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleNewTaskChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter task title"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="type">
                Task Type
              </label>
              <select
                name="type"
                value={newTask.type}
                onChange={handleNewTaskChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="General">General</option>
                <option value="Meeting">Meeting</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="dueDate">
                Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                value={newTask.dueDate}
                onChange={handleNewTaskChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            {newTask.type === "Meeting" && (
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="time">
                  Meeting Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={newTask.time}
                  onChange={handleNewTaskChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
            )}
            <div>
              <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                <input
                  type="checkbox"
                  name="priority"
                  checked={newTask.priority}
                  onChange={handleNewTaskChange}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                Priority Task
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50"
              disabled={loadingAction}
            >
              {loadingAction ? (editingTask ? "Updating..." : "Adding...") : editingTask ? "Update Task" : "Add Task"}
            </button>
            {editingTask && (
              <button
                type="button"
                onClick={() => {
                  setEditingTask(null);
                  setNewTask({
                    title: "",
                    type: "General",
                    dueDate: new Date().toISOString().split("T")[0],
                    time: "",
                    priority: false,
                  });
                  setTaskError(null);
                }}
                className="w-full bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition mt-2"
              >
                Cancel
              </button>
            )}
          </form>
          {taskError && (
            <div className="bg-red-100 text-red-600 px-4 py-3 rounded-lg mt-4">
              {taskError}
            </div>
          )}
        </div>

        {/* Priority and Work Tasks */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Priority Tasks */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-red-600" />
              Priority Tasks
            </h3>
            {loadingTasks ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin h-8 w-8 border-b-2 border-blue-600 rounded-full"></div>
              </div>
            ) : errorTasks ? (
              <div className="bg-red-100 text-red-600 px-4 py-3 rounded-lg">{errorTasks}</div>
            ) : priorityTasks.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600">
                      <th className="p-3 font-medium">Task</th>
                      <th className="p-3 font-medium">Type</th>
                      <th className="p-3 font-medium">Due Date</th>
                      <th className="p-3 font-medium">Time</th>
                      <th className="p-3 font-medium">Status</th>
                      <th className="p-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priorityTasks.map((task) =>
                      task._id && (
                        <tr key={task._id} className="border-b hover:bg-gray-50">
                          <td className={`p-3 ${task.status !== "pending" ? "line-through text-gray-500" : ""}`}>
                            {task.title}
                          </td>
                          <td className="p-3">{task.type}</td>
                          <td className="p-3">
                            {new Date(task.dueDate).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </td>
                          <td className="p-3">{task.time || "-"}</td>
                          <td className="p-3">
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                task.status === "approved" ? "bg-green-100 text-green-600" :
                                task.status === "rejected" ? "bg-red-100 text-red-600" :
                                task.status === "completed" ? "bg-blue-100 text-blue-600" :
                                "bg-yellow-100 text-yellow-600"
                              }`}
                            >
                              {task.status}
                            </span>
                          </td>
                          <td className="p-3 flex gap-2">
                            {task.type === "Leave Approval" && task.status === "pending" ? (
                              <>
                                <button
                                  onClick={() => handleTaskAction(task._id, "approved")}
                                  className="text-green-600 hover:text-green-800 disabled:opacity-50"
                                  title="Approve"
                                  disabled={loadingAction}
                                >
                                  <CheckCircle className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleTaskAction(task._id, "rejected")}
                                  className="text-red-600 hover:text-red-800 disabled:opacity-50"
                                  title="Reject"
                                  disabled={loadingAction}
                                >
                                  <XCircle className="w-5 h-5" />
                                </button>
                              </>
                            ) : task.status !== "completed" ? (
                              <>
                                <button
                                  onClick={() => handleEditTask(task)}
                                  className="text-yellow-600 hover:text-yellow-800 disabled:opacity-50"
                                  title="Edit"
                                  disabled={loadingAction}
                                >
                                  <Edit className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleTaskAction(task._id, "completed")}
                                  className="text-blue-600 hover:text-blue-800 disabled:opacity-50"
                                  title="Mark as Completed"
                                  disabled={loadingAction}
                                >
                                  <CheckSquare className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleDeleteTask(task._id)}
                                  className="text-red-600 hover:text-red-800 disabled:opacity-50"
                                  title="Delete"
                                  disabled={loadingAction}
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => handleDeleteTask(task._id)}
                                className="text-red-600 hover:text-red-800 disabled:opacity-50"
                                title="Delete"
                                disabled={loadingAction}
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">No priority tasks assigned.</p>
            )}
          </div>

          {/* Work Tasks */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              Work Tasks
            </h3>
            {loadingTasks ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin h-8 w-8 border-b-2 border-blue-600 rounded-full"></div>
              </div>
            ) : errorTasks ? (
              <div className="bg-red-100 text-red-600 px-4 py-3 rounded-lg">{errorTasks}</div>
            ) : workTasks.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600">
                      <th className="p-3 font-medium">Task</th>
                      <th className="p-3 font-medium">Type</th>
                      <th className="p-3 font-medium">Due Date</th>
                      <th className="p-3 font-medium">Time</th>
                      <th className="p-3 font-medium">Status</th>
                      <th className="p-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workTasks.map((task) =>
                      task._id && (
                        <tr key={task._id} className="border-b hover:bg-gray-50">
                          <td className={`p-3 ${task.status !== "pending" ? "line-through text-gray-500" : ""}`}>
                            {task.title}
                          </td>
                          <td className="p-3">{task.type}</td>
                          <td className="p-3">
                            {new Date(task.dueDate).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </td>
                          <td className="p-3">{task.time || "-"}</td>
                          <td className="p-3">
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                task.status === "approved" ? "bg-green-100 text-green-600" :
                                task.status === "rejected" ? "bg-red-100 text-red-600" :
                                task.status === "completed" ? "bg-blue-100 text-blue-600" :
                                "bg-yellow-100 text-yellow-600"
                              }`}
                            >
                              {task.status}
                            </span>
                          </td>
                          <td className="p-3 flex gap-2">
                            {task.type === "Leave Approval" && task.status === "pending" ? (
                              <>
                                <button
                                  onClick={() => handleTaskAction(task._id, "approved")}
                                  className="text-green-600 hover:text-green-800 disabled:opacity-50"
                                  title="Approve"
                                  disabled={loadingAction}
                                >
                                  <CheckCircle className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleTaskAction(task._id, "rejected")}
                                  className="text-red-600 hover:text-red-800 disabled:opacity-50"
                                  title="Reject"
                                  disabled={loadingAction}
                                >
                                  <XCircle className="w-5 h-5" />
                                </button>
                              </>
                            ) : task.status !== "completed" ? (
                              <>
                                <button
                                  onClick={() => handleEditTask(task)}
                                  className="text-yellow-600 hover:text-yellow-800 disabled:opacity-50"
                                  title="Edit"
                                  disabled={loadingAction}
                                >
                                  <Edit className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleTaskAction(task._id, "completed")}
                                  className="text-blue-600 hover:text-blue-800 disabled:opacity-50"
                                  title="Mark as Completed"
                                  disabled={loadingAction}
                                >
                                  <CheckSquare className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleDeleteTask(task._id)}
                                  className="text-red-600 hover:text-red-800 disabled:opacity-50"
                                  title="Delete"
                                  disabled={loadingAction}
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => handleDeleteTask(task._id)}
                                className="text-red-600 hover:text-red-800 disabled:opacity-50"
                                title="Delete"
                                disabled={loadingAction}
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">No work tasks assigned.</p>
            )}
          </div>
        </div>
      </div>

      {/* Calendar and Selected Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            Event Calendar
          </h3>
          {loadingEvents ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin h-8 w-8 border-b-2 border-blue-600 rounded-full"></div>
            </div>
          ) : errorEvents ? (
            <div className="bg-red-100 text-red-600 px-4 py-3 rounded-lg">{errorEvents}</div>
          ) : (
            <CustomCalendar
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
              events={events}
              getEventColor={getEventColor}
            />
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Events on{" "}
            {selectedDate.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h3>
          {selectedEvents.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-200 text-gray-600">
                    <th className="p-3 font-medium">Event</th>
                    <th className="p-3 font-medium">Type</th>
                    <th className="p-3 font-medium">Date</th>
                    <th className="p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedEvents.map((event) =>
                    event._id && (
                      <tr key={event._id} className="border-b hover:bg-gray-50">
                        <td className="p-3 flex items-center gap-2">
                          <span className={`w-3 h-3 rounded-full ${getEventColor(event.type)}`} />
                          {event.name}
                        </td>
                        <td className="p-3">{event.type}</td>
                        <td className="p-3">
                          {event.date.toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                          })}
                        </td>
                        <td className="p-3">
                          <Link to="/holiday" className="text-blue-600 hover:text-blue-800">
                            <Edit className="w-5 h-5" />
                          </Link>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600">No events on this date.</p>
          )}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-600" />
          Upcoming Events (Next 30 Days)
        </h3>
        {upcomingEvents.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200 text-gray-600">
                  <th className="p-3 font-medium">Event</th>
                  <th className="p-3 font-medium">Type</th>
                  <th className="p-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {upcomingEvents.map((event) =>
                  event._id && (
                    <tr key={event._id} className="border-b hover:bg-gray-50">
                      <td className="p-3 flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${getEventColor(event.type)}`} />
                        {event.name}
                      </td>
                      <td className="p-3">{event.type}</td>
                      <td className="p-3">
                        {event.date.toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                        })}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">No events in the next 30 days.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;