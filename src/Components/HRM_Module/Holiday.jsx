import React, { useState, useEffect } from "react";
import { Edit, Trash2, Plus, Clock, Gift, Star, Users, Calendar as CalendarIcon, Search, X } from "lucide-react";
import hrmApi from "../../ApiCalling/Hrm_Api";
import CustomCalendar from "./CustomCalendar";

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
  const [filterType, setFilterType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [showAllEventsByType, setShowAllEventsByType] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [importantEvents, setImportantEvents] = useState(new Set());

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await hrmApi.getEvents();
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
      if (editId) {
        await hrmApi.updateEvent(editId, eventData);
      } else {
        await hrmApi.createEvent(eventData);
      }
      setFormData({ name: "", type: "Festival", date: "", year: "" });
      setEditId(null);
      setError(null);
      setShowForm(false);
      setShowAllEventsByType({});
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
    setSelectedEvent(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await hrmApi.deleteEvent(id);
        setShowAllEventsByType({});
        setSelectedEvent(null);
        setImportantEvents((prev) => {
          const newSet = new Set(prev);
          newSet.delete(id);
          return newSet;
        });
        await fetchEvents();
      } catch (error) {
        console.error("Error deleting event:", error.response?.data || error);
        setError(error.response?.data?.message || "Failed to delete event. Please try again.");
      }
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const eventsOnDate = events
      .filter(
        (event) =>
          event.date.toDateString() === date.toDateString() ||
          (event.type.includes("Birthday") &&
            event.date.getDate() === date.getDate() &&
            event.date.getMonth() === date.getMonth())
      )
      .slice(0, 5); // Limit to 5 events by default
    setSelectedEvents(eventsOnDate);
  };

  const getEventColor = (type) => {
    switch (type) {
      case "Festival":
        return "bg-gradient-to-r from-green-400 to-green-600";
      case "Anniversary":
        return "bg-gradient-to-r from-purple-400 to-purple-600";
      case "Director Birthday":
        return "bg-gradient-to-r from-red-400 to-red-600";
      case "Employee Birthday":
        return "bg-gradient-to-r from-blue-400 to-blue-600";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-600";
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case "Festival":
        return <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
      case "Anniversary":
        return <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
      case "Director Birthday":
        return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
      case "Employee Birthday":
        return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
      default:
        return <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />;
    }
  };

  const toggleImportant = (id) => {
    setImportantEvents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredEvents = events
    .filter((event) => (filterType === "All" || event.type === filterType))
    .filter((event) => event.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const eventsByType = filteredEvents.reduce((acc, event) => {
    if (!acc[event.type]) acc[event.type] = [];
    acc[event.type].push(event);
    return acc;
  }, {});

  const upcomingEvents = filteredEvents
    .filter((event) => {
      const diffTime = event.date - new Date(currentDate);
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 30;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return a.date - b.date;
    })
    .slice(0, 5); // Limit to 5 events by default

  const toggleShowAllEvents = (type) => {
    setShowAllEventsByType((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const cancelEdit = () => {
    setFormData({ name: "", type: "Festival", date: "", year: "" });
    setEditId(null);
    setError(null);
    setShowForm(false);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setFilterType("All");
    setSortBy("date");
    setShowAllEventsByType({});
  };

  const openEventPopup = (event) => {
    setSelectedEvent(event);
  };

  const closeEventPopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 bg-gray-100 min-h-screen w-full overflow-x-hidden">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            Holiday Management
          </h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 min-h-[40px] text-xs sm:text-sm md:text-base"
            aria-label={showForm ? "Hide event form" : "Add new event"}
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            {showForm ? "Hide Form" : "Add Event"}
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-4 sm:mb-6 border">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
              {getEventIcon(formData.type)}
              {editId ? "Edit Event" : "Add New Event"}
            </h3>
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-3 sm:mb-4 text-xs sm:text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="peer w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-transparent text-xs sm:text-sm md:text-base"
                  placeholder="Event Name"
                  required
                  aria-required="true"
                />
                <label
                  htmlFor="name"
                  className="absolute left-2 -top-2.5 text-gray-700 text-xs sm:text-sm font-semibold bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs sm:peer-focus:text-sm"
                >
                  Event Name
                </label>
              </div>
              <div className="relative">
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm md:text-base"
                  required
                  aria-required="true"
                >
                  <option value="Festival">Festival</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Director Birthday">Director Birthday</option>
                  <option value="Employee Birthday">Employee Birthday</option>
                </select>
                <label
                  htmlFor="type"
                  className="absolute left-2 -top-2.5 text-gray-700 text-xs sm:text-sm font-semibold bg-white px-1"
                >
                  Type
                </label>
              </div>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="peer w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-transparent text-xs sm:text-sm md:text-base"
                  required
                  aria-required="true"
                />
                <label
                  htmlFor="date"
                  className="absolute left-2 -top-2.5 text-gray-700 text-xs sm:text-sm font-semibold bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs sm:peer-focus:text-sm"
                >
                  Date
                </label>
              </div>
              <div className="relative">
                <input
                  type="number"
                  name="year"
                  id="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="peer w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-transparent text-xs sm:text-sm md:text-base"
                  placeholder="e.g., 1990"
                />
                <label
                  htmlFor="year"
                  className="absolute left-2 -top-2.5 text-gray-700 text-xs sm:text-sm font-semibold bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs sm:peer-focus:text-sm"
                >
                  Year (optional)
                </label>
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 min-h-[40px] text-xs sm:text-sm md:text-base"
                  aria-label={editId ? "Update event" : "Add event"}
                >
                  <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {editId ? "Update Event" : "Add Event"}
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 min-h-[40px] text-xs sm:text-sm md:text-base"
                  aria-label="Cancel event form"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md w-full max-w-md sm:max-w-lg">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">Event Details</h3>
                <button
                  onClick={closeEventPopup}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close event details"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="space-y-2 text-xs sm:text-sm md:text-base">
                <p>
                  <span className="font-semibold text-gray-700">Name:</span> {selectedEvent.name}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Date:</span>{" "}
                  {selectedEvent.date.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
                <button
                  onClick={() => handleEdit(selectedEvent)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm min-h-[36px]"
                  aria-label={`Edit ${selectedEvent.name}`}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(selectedEvent._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm min-h-[36px]"
                  aria-label={`Delete ${selectedEvent.name}`}
                >
                  Delete
                </button>
                <button
                  onClick={() => toggleImportant(selectedEvent._id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm min-h-[36px] ${
                    importantEvents.has(selectedEvent._id)
                      ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                  aria-label={`Mark ${selectedEvent.name} as ${importantEvents.has(selectedEvent._id) ? "not important" : "important"}`}
                >
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 inline-block mr-1" />
                  {importantEvents.has(selectedEvent._id) ? "Unmark Important" : "Mark Important"}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  Event Categories
                </h3>
                <span className="text-xs sm:text-sm text-gray-600">Total Events: {filteredEvents.length}</span>
              </div>
              <div className="space-y-3 sm:space-y-4 mb-3 sm:mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 sm:p-3 pl-8 sm:pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm md:text-base"
                    placeholder="Search events by name..."
                    aria-label="Search events by name"
                  />
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <select
                    name="filterType"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm md:text-base"
                    aria-label="Filter by event type"
                  >
                    <option value="All">All</option>
                    <option value="Festival">Festival</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Director Birthday">Director Birthday</option>
                    <option value="Employee Birthday">Employee Birthday</option>
                  </select>
                  <button
                    onClick={handleClearFilters}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm md:text-base min-h-[40px]"
                    aria-label="Clear filters"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
              {loading ? (
                <div className="flex items-center justify-center py-6 sm:py-8">
                  <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : Object.keys(eventsByType).length > 0 ? (
                <div className="space-y-3 sm:space-y-4">
                  {Object.entries(eventsByType).map(([type, typeEvents]) => (
                    <div
                      key={type}
                      className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          {getEventIcon(type)}
                          <h4 className="text-sm sm:text-base font-semibold text-gray-800">{type}</h4>
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm">
                            {typeEvents.length}
                          </span>
                        </div>
                        {!showAllEventsByType[type] && typeEvents.length > 5 && (
                          <button
                            onClick={() => toggleShowAllEvents(type)}
                            className="text-blue-600 text-xs sm:text-sm hover:underline"
                            aria-label={`See more ${type} events`}
                          >
                            See More
                          </button>
                        )}
                        {showAllEventsByType[type] && (
                          <button
                            onClick={() => toggleShowAllEvents(type)}
                            className="text-blue-600 text-xs sm:text-sm hover:underline"
                            aria-label={`See less ${type} events`}
                          >
                            See Less
                          </button>
                        )}
                      </div>
                      <div className="space-y-2">
                        {(showAllEventsByType[type] ? typeEvents : typeEvents.slice(0, 5)).map((event) => (
                          <div
                            key={event._id}
                            className={`flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer ${
                              importantEvents.has(event._id) ? "bg-yellow-100" : ""
                            }`}
                            onClick={() => openEventPopup(event)}
                            onKeyDown={(e) => e.key === "Enter" && openEventPopup(event)}
                            tabIndex={0}
                            role="button"
                            aria-label={`View details for ${event.name}`}
                          >
                            <div className="flex items-center gap-2 sm:gap-3 flex-1">
                              <span className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getEventColor(event.type)}`} />
                              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                                {`${event.name} - ${event.date.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`}
                              </p>
                            </div>
                            <div className="flex gap-1 sm:gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEdit(event);
                                }}
                                className="text-blue-600 hover:text-blue-800 p-1 sm:p-1.5 rounded hover:bg-blue-50 transition-colors duration-200"
                                aria-label={`Edit ${event.name}`}
                              >
                                <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(event._id);
                                }}
                                className="text-red-600 hover:text-red-800 p-1 sm:p-1.5 rounded hover:bg-red-50 transition-colors duration-200"
                                aria-label={`Delete ${event.name}`}
                              >
                                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleImportant(event._id);
                                }}
                                className={`p-1 sm:p-1.5 rounded transition-colors duration-200 ${
                                  importantEvents.has(event._id)
                                    ? "text-yellow-600 hover:text-yellow-800"
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                                aria-label={`Mark ${event.name} as ${importantEvents.has(event._id) ? "not important" : "important"}`}
                              >
                                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4 text-xs sm:text-sm md:text-base">
                  {searchQuery ? `No events found matching "${searchQuery}"` : "No events match your filters."}
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Event Calendar</h3>
              <div className="calendar-container">
                <CustomCalendar
                  selectedDate={selectedDate}
                  onDateChange={handleDateChange}
                  events={events}
                  getEventColor={getEventColor}
                />
              </div>
              {selectedEvents.length > 0 && (
                <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm">
                  <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-2 sm:mb-3">
                    Events on {selectedDate.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  </h4>
                  <div className="space-y-2">
                    {selectedEvents.map((event) => (
                      <div
                        key={event._id}
                        className={`flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer ${
                          importantEvents.has(event._id) ? "bg-yellow-100" : ""
                        }`}
                        onClick={() => openEventPopup(event)}
                        onKeyDown={(e) => e.key === "Enter" && openEventPopup(event)}
                        tabIndex={0}
                        role="button"
                        aria-label={`View details for ${event.name}`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3 flex-1">
                          <span className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getEventColor(event.type)}`} />
                          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                            {`${event.name} - ${event.date.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`}
                          </p>
                        </div>
                        <div className="flex gap-1 sm:gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(event);
                            }}
                            className="text-blue-600 hover:text-blue-800 p-1 sm:p-1.5 rounded hover:bg-blue-50 transition-colors duration-200"
                            aria-label={`Edit ${event.name}`}
                          >
                            <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(event._id);
                            }}
                            className="text-red-600 hover:text-red-800 p-1 sm:p-1.5 rounded hover:bg-red-50 transition-colors duration-200"
                            aria-label={`Delete ${event.name}`}
                          >
                            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleImportant(event._id);
                            }}
                            className={`p-1 sm:p-1.5 rounded transition-colors duration-200 ${
                              importantEvents.has(event._id)
                                ? "text-yellow-600 hover:text-yellow-800"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                            aria-label={`Mark ${event.name} as ${importantEvents.has(event._id) ? "not important" : "important"}`}
                          >
                            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Upcoming Events (Next 30 Days)</h3>
              <div className="mb-3 sm:mb-4">
                <label className="block text-gray-700 text-xs sm:text-sm font-semibold mb-1 sm:mb-2" htmlFor="sortBy">
                  Sort By
                </label>
                <select
                  name="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm md:text-base"
                  aria-label="Sort upcoming events"
                >
                  <option value="date">Date</option>
                  <option value="name">Name</option>
                </select>
              </div>
              {loading ? (
                <div className="flex items-center justify-center py-6 sm:py-8">
                  <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : error ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm">
                  {error}
                </div>
              ) : upcomingEvents.length > 0 ? (
                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event._id}
                      className={`border rounded-lg p-2 sm:p-3 hover:shadow-md transition-shadow duration-200 bg-white cursor-pointer ${
                        importantEvents.has(event._id) ? "bg-yellow-100" : ""
                      }`}
                      onClick={() => openEventPopup(event)}
                      onKeyDown={(e) => e.key === "Enter" && openEventPopup(event)}
                      tabIndex={0}
                      role="button"
                      aria-label={`View details for ${event.name}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1">
                          <span className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getEventColor(event.type)}`} />
                          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                            {`${event.name} - ${event.date.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`}
                          </p>
                        </div>
                        <div className="flex gap-1 sm:gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(event);
                            }}
                            className="text-blue-600 hover:text-blue-800 p-1 sm:p-1.5 rounded hover:bg-blue-50 transition-colors duration-200"
                            aria-label={`Edit ${event.name}`}
                          >
                            <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(event._id);
                            }}
                            className="text-red-600 hover:text-red-800 p-1 sm:p-1.5 rounded hover:bg-red-50 transition-colors duration-200"
                            aria-label={`Delete ${event.name}`}
                          >
                            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleImportant(event._id);
                            }}
                            className={`p-1 sm:p-1.5 rounded transition-colors duration-200 ${
                              importantEvents.has(event._id)
                                ? "text-yellow-600 hover:text-yellow-800"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                            aria-label={`Mark ${event.name} as ${importantEvents.has(event._id) ? "not important" : "important"}`}
                          >
                            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 sm:py-8 text-gray-500">
                  <CalendarIcon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-gray-300" />
                  <p className="text-xs sm:text-sm md:text-base">No upcoming events in the next 30 days</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Holiday;