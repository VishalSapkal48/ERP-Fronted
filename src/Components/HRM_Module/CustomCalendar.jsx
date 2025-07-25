import React, { useState } from "react";

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
    return events.filter(
      (event) =>
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
    const today = new Date(); // July 12, 2025, 01:55 PM IST
    return date.toDateString() === today.toDateString();
  };

  const handleDateClick = (day) => {
    if (!day) return;
    const date = new Date(currentYear, currentMonth, day);
    onDateChange(date);
  };

  const navigateMonth = (direction) => {
    if (direction === "prev") {
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

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    onDateChange(today);
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigateMonth("prev")}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Previous month"
          >
            ←
          </button>
          <h3 className="text-lg font-semibold text-gray-800">
            {monthNames[currentMonth]} {currentYear}
          </h3>
          <button
            onClick={() => navigateMonth("next")}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Next month"
          >
            →
          </button>
        </div>
        <button
          onClick={goToToday}
          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm font-medium"
          aria-label="Go to today"
        >
          Today
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-gray-600 p-2">
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
                h-12 flex flex-col items-center justify-center text-sm rounded-lg relative
                ${day ? "cursor-pointer hover:bg-gray-100" : "cursor-default"}
                ${isSelected ? "bg-blue-600 text-white" : ""}
                ${isTodayDate && !isSelected ? "bg-yellow-100" : ""}
                transition-colors duration-200
              `}
              aria-label={day ? `Select date ${monthNames[currentMonth]} ${day}, ${currentYear}` : ""}
            >
              {day && (
                <>
                  <span className="text-sm font-medium">{day}</span>
                  {eventsForDay.length > 0 && (
                    <div className="flex space-x-1 mt-1">
                      {eventsForDay.slice(0, 3).map((event, i) => (
                        <span
                          key={i}
                          className={`w-2 h-2 rounded-full ${getEventColor(event.type)} relative group`}
                        >
                          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg p-2 -top-10 left-1/2 transform -translate-x-1/2 z-10 w-40">
                            {event.name} ({event.type})
                            {event.year && <span>, {event.year}</span>}
                          </div>
                        </span>
                      ))}
                    </div>
                  )}
                  {eventsForDay.length > 3 && (
                    <span className="text-xs text-gray-500 absolute bottom-1 right-1">+{eventsForDay.length - 3}</span>
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

export default CustomCalendar;