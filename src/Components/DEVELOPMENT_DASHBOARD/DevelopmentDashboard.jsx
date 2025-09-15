import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, AlertTriangle, FileText, Settings, Calendar, CheckCircle, Trash2 } from 'lucide-react';

const DevelopmentDashboard = () => {
  // Card data for main pages
  const cards = [
    {
      path: '/development/leadgeneration',
      icon: <FileText className="w-8 h-8 text-red-600" />,
      label: 'Lead Generation',
      description: 'Manage and track new leads for projects.',
    },
    {
      path: '/development/ongoingchallengesaftersurvey',
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      label: 'Ongoing Challenges After Survey',
      description: 'View challenges identified post-survey.',
    },
    {
      path: '/development/challengesafterplanexplanation',
      icon: <Settings className="w-8 h-8 text-red-600" />,
      label: 'Challenges After Plan Explanation',
      description: 'Track issues after plan discussions.',
    },
    {
      path: '/development/pendingfollowup',
      icon: <FileText className="w-8 h-8 text-red-600" />,
      label: 'Pending Follow-up',
      description: 'Monitor pending follow-up actions.',
    },
    {
      path: '/development/monthlysitesopeningreport',
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      label: 'Monthly Sites Opening Report',
      description: 'Review monthly site opening statistics.',
    },
  ];

  // To-do list state
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Simple calendar (current month display, static for simplicity)
  const today = new Date();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const currentMonth = monthNames[today.getMonth()];
  const currentYear = today.getFullYear();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-red-600 mb-8">Development Dashboard</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {cards.map((card) => (
          <Link
            key={card.path}
            to={card.path}
            className="bg-white shadow-lg rounded-lg p-6 hover:bg-red-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              {card.icon}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{card.label}</h2>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Calendar and To-Do List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-semibold text-gray-900">
              {currentMonth} {currentYear}
            </h2>
          </div>
          <div className="text-gray-600">
            <p className="text-sm">
              (Static calendar display. Select a date to view or add tasks.)
            </p>
            {/* Placeholder for calendar grid */}
            <div className="grid grid-cols-7 gap-2 mt-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center font-medium text-gray-700">
                  {day}
                </div>
              ))}
              {/* Simplified calendar grid (static) */}
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className={`p-2 text-center rounded-full ${
                    i + 1 === today.getDate()
                      ? 'bg-red-100 text-red-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* To-Do List Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">To-Do List</h2>
          <form onSubmit={addTask} className="flex space-x-2 mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Add
            </button>
          </form>
          <ul className="space-y-2">
            {tasks.length === 0 && (
              <li className="text-gray-500 text-sm">No tasks added yet.</li>
            )}
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="text-gray-600 hover:text-red-600"
                  >
                    <CheckCircle
                      className={`w-5 h-5 ${
                        task.completed ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <span
                    className={`${
                      task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-gray-600 hover:text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentDashboard;