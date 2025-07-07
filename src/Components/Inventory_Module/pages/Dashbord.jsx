import React, { useState, useEffect } from 'react';
import { Calendar, Home, Package, ShoppingCart, FileText, Users, Settings, Menu, X, Plus, Edit2, Trash2 } from 'lucide-react';




// Todo Component
const TodoSection = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Review inventory levels', completed: false },
    { id: 2, text: 'Update product prices', completed: true },
    { id: 3, text: 'Prepare monthly report', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">To Do List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-2 border rounded">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-3"
              />
              <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

// Notes Component
const NotesSection = () => {
  const [notes, setNotes] = useState('Meeting with supplier tomorrow at 2 PM\nCheck inventory levels for Product X\nReview quarterly sales report');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="mb-6 bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Notes</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          <Edit2 size={16} className="mr-1" />
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
      {isEditing ? (
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Enter your notes here..."
        />
      ) : (
        <div className="p-3 bg-gray-50 rounded-md min-h-32">
          {notes ? (
            <pre className="whitespace-pre-wrap text-gray-700">{notes}</pre>
          ) : (
            <p className="text-gray-500">No notes yet. Click Edit to add some.</p>
          )}
        </div>
      )}
    </section>
  );
};

// Calendar Component
const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const selectDate = (day) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const isToday = (day) => {
    const today = new Date();
    return today.getDate() === day && 
           today.getMonth() === currentDate.getMonth() && 
           today.getFullYear() === currentDate.getFullYear();
  };

  const isSelected = (day) => {
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === currentDate.getMonth() && 
           selectedDate.getFullYear() === currentDate.getFullYear();
  };

  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Calendar</h2>
      <div className="max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded">
            ←
          </button>
          <h3 className="text-lg font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded">
            →
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-2 font-semibold text-gray-600">
              {day}
            </div>
          ))}
          {Array(firstDayOfMonth).fill(null).map((_, index) => (
            <div key={index} className="p-2"></div>
          ))}
          {Array(daysInMonth).fill(null).map((_, index) => {
            const day = index + 1;
            return (
              <button
                key={day}
                onClick={() => selectDate(day)}
                className={`p-2 hover:bg-blue-100 rounded ${
                  isToday(day) ? 'bg-blue-500 text-white' : 
                  isSelected(day) ? 'bg-blue-200' : ''
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Main App Component
const Dashbord = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [metrics, setMetrics] = useState({
    totalStock: 0,
    lowStockItems: 0,
    totalSales: 0,
    totalPurchases: 0,
  });

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, action: 'Added new stock item: Product A', time: '10:30 AM' },
    { id: 2, action: 'Generated invoice #INV-001', time: '10:15 AM' },
    { id: 3, action: 'Updated stock level for Product B', time: '09:45 AM' },
  ]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Simulate loading metrics
    setTimeout(() => {
      setMetrics({
        totalStock: 150,
        lowStockItems: 5,
        totalSales: 12000,
        totalPurchases: 8000,
      });
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
    
          <div className="max-w-7xl mx-auto">
           
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <TodoSection />
                  <NotesSection />
              </div>
              <div className="flex-1">
                <CalendarSection />
              </div>
            </div>
            <section className="mb-6 bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Attendance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-green-600">Present Today</h3>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-red-600">Absent Today</h3>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-blue-600">Late Arrivals</h3>
                  <p className="text-2xl font-bold">1</p>
                </div>
              </div>
            </section>

            <section className="mb-6 bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
              <ul className="space-y-3">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">{activity.action}</span>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Footer */}
            <footer className="bg-white p-6 text-center rounded-lg shadow">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 mb-2 md:mb-0">
                  © 2024 Dashboard App. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">Privacy Policy</a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">Terms of Service</a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">Contact Us</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
     
  );
};

export default Dashbord;