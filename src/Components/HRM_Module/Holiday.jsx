
import React, { useState, useEffect } from "react";
import hrmApi from "../../ApiCalling/Hrm_Api"; // Use real API
import { Edit, Trash2, Plus, Clock, Gift, Star, Users, Calendar as CalendarIcon } from "lucide-react";

// Custom Calendar Component
const CustomCalendar = ({ selectedDate, onDateChange, events, getEventColor }) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const generateCalendarDays = () => {
    const days = [];
    const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear);

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const getEventsForDate = (day) => {
    if (!day) return [];
    const date = new Date(currentYear, currentMonth, day);
    return events.filter(event => 
      event.date.toDateString() === date.toDateString() ||
      (event.type.includes("Birthday") &&
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth())
    );
  };

  const isSelectedDate = (day) => {
    if (!day) return false;
    const date = new Date(currentYear, currentMonth, day);
    return date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (day) => {
    if (!day) return false;
    const date = new Date(currentYear, currentMonth, day);
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const handleDateClick = (day) => {
    if (!day) return;
    const date = new Date(currentYear, currentMonth, day);
    onDateChange(date);
  };

  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigateMonth('prev')}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          ←
        </button>
        <h3 className="text-lg font-semibold text-gray-800">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <button
          onClick={() => navigateMonth('next')}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => {
          const eventsForDay = getEventsForDate(day);
          const isSelected = isSelectedDate(day);
          const isTodayDate = isToday(day);
          
          return (
            <div
              key={index}
              onClick={() => handleDateClick(day)}
              className={`
                h-10 flex flex-col items-center justify-center text-sm cursor-pointer rounded-lg
                ${day ? 'hover:bg-gray-100' : ''}
                ${isSelected ? 'bg-blue-500 text-white' : ''}
                ${isTodayDate && !isSelected ? 'bg-yellow-100' : ''}
                ${!day ? 'cursor-default' : ''}
              `}
            >
              {day && (
                <>
                  <span className="text-xs">{day}</span>
                  {eventsForDay.length > 0 && (
                    <div className="flex space-x-1 mt-1">
                      {eventsForDay.slice(0, 3).map((event, i) => (
                        <span
                          key={i}
                          className={`w-1 h-1 rounded-full ${getEventColor(event.type)}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Holiday = ({ currentDate = new Date() }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "Festival",
    date: "",
    year: "",
  });
  const [editId, setEditId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date(currentDate));
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await hrmApi.getEvents();
      console.log('Fetched events:', data); // Debug log
      setEvents(data.map((event) => ({ ...event, date: new Date(event.date) })));
      setLoading(false);
    } catch (error) {
      console.error("Fetch Error Details:", error.response?.data || error);
      setError("Failed to fetch events. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date) {
      setError("Event name and date are required.");
      return;
    }

    try {
      const eventData = {
        name: formData.name,
        type: formData.type,
        date: new Date(formData.date).toISOString(),
        year: formData.year ? parseInt(formData.year) : undefined,
      };
      console.log('Submitting event:', eventData); // Debug log
      if (editId) {
        await hrmApi.updateEvent(editId, eventData);
      } else {
        await hrmApi.createEvent(eventData);
      }
      setFormData({ name: "", type: "Festival", date: "", year: "" });
      setEditId(null);
      setError(null);
      setShowForm(false);
      await fetchEvents();
    } catch (error) {
      console.error("Error saving event:", error.response?.data || error);
      setError(error.response?.data?.message || "Failed to save event. Please try again.");
    }
  };

  const handleEdit = (event) => {
    setEditId(event._id);
    setFormData({
      name: event.name,
      type: event.type,
      date: event.date.toISOString().split("T")[0],
      year: event.year || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await hrmApi.deleteEvent(id);
        await fetchEvents();
      } catch (error) {
        console.error("Error deleting event:", error.response?.data || error);
        setError(error.response?.data?.message || "Failed to delete event. Please try again.");
      }
    }
  };

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

  const getEventIcon = (type) => {
    switch (type) {
      case "Festival": return <Gift className="w-4 h-4" />;
      case "Anniversary": return <Star className="w-4 h-4" />;
      case "Director Birthday": return <Users className="w-4 h-4" />;
      case "Employee Birthday": return <Users className="w-4 h-4" />;
      default: return <CalendarIcon className="w-4 h-4" />;
    }
  };

  const upcomingEvents = events
    .filter((event) => {
      const diffTime = event.date - new Date(currentDate);
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 30;
    })
    .sort((a, b) => a.date - b.date);

  const eventsByType = events.reduce((acc, event) => {
    if (!acc[event.type]) acc[event.type] = [];
    acc[event.type].push(event);
    return acc;
  }, {});

  const cancelEdit = () => {
    setFormData({ name: "", type: "Festival", date: "", year: "" });
    setEditId(null);
    setError(null);
    setShowForm(false);
  };

  return (
    <div className="p-4 sm:p-6 lg:ml-64 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Holiday Management</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            {showForm ? "Hide Form" : "Add Event"}
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2">
              {getEventIcon(formData.type)}
              {editId ? "Edit Event" : "Add New Event"}
            </h3>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-2 font-medium">Event Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter event name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2 font-medium">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="Festival">Festival</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Director Birthday">Director Birthday</option>
                  <option value="Employee Birthday">Employee Birthday</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-2 font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2 font-medium">Year (optional)</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 1990"
                />
              </div>
              <div className="md:col-span-2 flex space-x-3">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
                >
                  <CalendarIcon className="w-4 h-4" />
                  {editId ? "Update Event" : "Add Event"}
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Event Categories
              </h3>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : Object.keys(eventsByType).length > 0 ? (
                <div className="space-y-4">
                  {Object.entries(eventsByType).map(([type, typeEvents]) => (
                    <div key={type} className="border-l-4 pl-4" style={{ borderColor: getEventColor(type).replace('bg-', '').replace('-500', '') }}>
                      <div className="flex items-center gap-2 mb-2">
                        {getEventIcon(type)}
                        <h4 className="font-medium text-gray-700">{type}</h4>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {typeEvents.length}
                        </span>
                      </div>
                      <div className="space-y-1">
                        {typeEvents.slice(0, 3).map(event => (
                          <p key={event._id} className="text-sm text-gray-600 truncate">
                            {event.name}
                          </p>
                        ))}
                        {typeEvents.length > 3 && (
                          <p className="text-xs text-gray-500">+{typeEvents.length - 3} more</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No events available.</p>
              )}
            </div>
          </div>

          <div className="xl:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Event Calendar</h3>
              <div className="calendar-container">
                <CustomCalendar
                  selectedDate={selectedDate}
                  onDateChange={handleDateChange}
                  events={events}
                  getEventColor={getEventColor}
                />
              </div>
              {selectedEvents.length > 0 && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Events on {selectedDate.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  </h4>
                  <div className="space-y-2">
                    {selectedEvents.map((event) => (
                      <div key={event._id} className="flex items-center gap-3 p-2 bg-white rounded border">
                        <span className={`w-3 h-3 rounded-full ${getEventColor(event.type)}`} />
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{event.name}</p>
                          <p className="text-xs text-gray-500">{event.type}</p>
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleEdit(event)}
                            className="text-blue-600 hover:text-blue-800 p-1"
                          >
                            <Edit className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleDelete(event._id)}
                            className="text-red-600 hover:text-red-800 p-1"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="xl:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Upcoming Events (Next 30 Days)
              </h3>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : error ? (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>
              ) : upcomingEvents.length > 0 ? (
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`w-3 h-3 rounded-full ${getEventColor(event.type)}`} />
                          <div>
                            <h4 className="font-medium text-gray-800">{event.name}</h4>
                            <p className="text-sm text-gray-500">{event.type}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {event.date.toLocaleDateString("en-GB", { 
                                day: "numeric", 
                                month: "long",
                                year: "numeric"
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleEdit(event)}
                            className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(event._id)}
                            className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <CalendarIcon className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>No upcoming events in the next 30 days</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .calendar-container {
          width: 100%;
          font-family: inherit;
        }
        .calendar-container .react-calendar {
          width: 100%;
          border: none;
          font-family: inherit;
        }
        .calendar-container .react-calendar__tile {
          position: relative;
          padding: 0.75rem 0.5rem;
          background: none;
          border: none;
          font-size: 0.875rem;
        }
        .calendar-container .react-calendar__tile:hover {
          background-color: #f3f4f6;
        }
        .calendar-container .react-calendar__tile--active {
          background-color: #3b82f6 !important;
          color: white;
        }
        .calendar-container .react-calendar__tile--now {
          background-color: #fef3c7;
        }
        .calendar-container .react-calendar__month-view__weekdays {
          text-align: center;
          font-weight: 500;
          font-size: 0.75rem;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default Holiday;