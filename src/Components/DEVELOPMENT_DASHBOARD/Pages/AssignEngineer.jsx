import React, { useState } from 'react';

function AssignTask() {
  // Mock backend data for engineers
  const engineers = [
    { id: 'E001', name: 'John Doe', number: '123-456-7890', email: 'john@example.com' },
    { id: 'E002', name: 'Jane Smith', number: '987-654-3210', email: 'jane@example.com' },
    { id: 'E003', name: 'Bob Johnson', number: '555-123-4567', email: 'bob@example.com' },
    { id: 'E004', name: 'Alice Brown', number: '444-987-6543', email: 'alice@example.com' },
  ];

  // State for task assignment form and modal
  const [addressArea, setAddressArea] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [assignedTasks, setAssignedTasks] = useState([
    {
      id: 'T001',
      engineerId: 'E001',
      engineerName: 'John Doe',
      address: { area: 'Downtown', city: 'New York', district: 'Manhattan', state: 'NY', pincode: '10001' },
      timestamp: '2025-09-09 10:00 AM',
    },
    {
      id: 'T002',
      engineerId: 'E002',
      engineerName: 'Jane Smith',
      address: { area: 'Westwood', city: 'Los Angeles', district: 'Los Angeles', state: 'CA', pincode: '90024' },
      timestamp: '2025-09-09 11:30 AM',
    },
    {
      id: 'T003',
      engineerId: 'E001',
      engineerName: 'John Doe',
      address: { area: 'Loop', city: 'Chicago', district: 'Cook', state: 'IL', pincode: '60601' },
      timestamp: '2025-09-10 09:15 AM',
    },
    {
      id: 'T004',
      engineerId: 'E003',
      engineerName: 'Bob Johnson',
      address: { area: 'Midtown', city: 'Houston', district: 'Harris', state: 'TX', pincode: '77002' },
      timestamp: '2025-09-10 10:45 AM',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [modalEngineer, setModalEngineer] = useState(engineers[0]);

  // Helper function to get engineer details by ID
  const getEngineerById = (engineerId) => {
    return engineers.find(eng => eng.id === engineerId);
  };

  // Handle task assignment or update
  const handleAssignTask = () => {
    if (addressArea && city && district && state && pincode) {
      const newAddress = { area: addressArea, city, district, state, pincode };
      const taskData = {
        id: editingTask ? editingTask.id : `T${(assignedTasks.length + 1).toString().padStart(3, '0')}`,
        engineerId: modalEngineer.id,
        engineerName: modalEngineer.name,
        address: newAddress,
        timestamp: editingTask ? editingTask.timestamp : new Date().toLocaleString('en-US', { 
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }),
      };

      if (editingTask) {
        // Update existing task
        setAssignedTasks(
          assignedTasks.map((task) => (task.id === editingTask.id ? taskData : task))
        );
      } else {
        // Add new task
        setAssignedTasks([...assignedTasks, taskData]);
      }

      // Reset form and close modal
      setAddressArea('');
      setCity('');
      setDistrict('');
      setState('');
      setPincode('');
      setEditingTask(null);
      setIsModalOpen(false);
      alert(
        `Task ${editingTask ? 'updated' : 'assigned'} to ${modalEngineer.name} (ID: ${
          modalEngineer.id
        }) at ${addressArea}, ${city}, ${district}, ${state} ${pincode}. Handling client properly.`
      );
    } else {
      alert('Please fill in all address fields.');
    }
  };

  // Open modal for new task
  const openNewTaskModal = () => {
    setEditingTask(null);
    setModalEngineer(engineers[0]);
    setAddressArea('');
    setCity('');
    setDistrict('');
    setState('');
    setPincode('');
    setIsModalOpen(true);
  };

  // Open modal for editing task
  const handleEditTask = (task) => {
    setEditingTask(task);
    setModalEngineer(engineers.find((eng) => eng.id === task.engineerId));
    setAddressArea(task.address.area);
    setCity(task.address.city);
    setDistrict(task.address.district);
    setState(task.address.state);
    setPincode(task.address.pincode);
    setIsModalOpen(true);
  };

  // Delete task function
  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setAssignedTasks(assignedTasks.filter(task => task.id !== taskId));
    }
  };

  // Handle search
  const filteredTasks = assignedTasks.filter((task) => {
    const matchesId = searchId ? task.engineerId.toLowerCase().includes(searchId.toLowerCase()) : true;
    const matchesName = searchName ? task.engineerName.toLowerCase().includes(searchName.toLowerCase()) : true;
    return matchesId && matchesName;
  });

  // Clear search filters
  const clearSearch = () => {
    setSearchId('');
    setSearchName('');
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Task Assignment Management System</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Tasks</h3>
          <p className="text-2xl font-bold">{assignedTasks.length}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Available Engineers</h3>
          <p className="text-2xl font-bold">{engineers.length}</p>
        </div>
        <div className="bg-orange-500 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Active Today</h3>
          <p className="text-2xl font-bold">
            {assignedTasks.filter(task => 
              task.timestamp.includes(new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' }))
            ).length}
          </p>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Filtered Results</h3>
          <p className="text-2xl font-bold">{filteredTasks.length}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex flex-wrap gap-4">
        <button
          onClick={openNewTaskModal}
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200 font-medium shadow-md"
        >
          + Assign New Task
        </button>
        <button
          onClick={clearSearch}
          className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-200 font-medium shadow-md"
        >
          Clear Filters
        </button>
      </div>

      {/* Search Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
          <span className="mr-2">🔍</span>
          Search & Filter Tasks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search by Engineer ID</label>
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Engineer ID (e.g., E001)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search by Engineer Name</label>
            <input
              type="text"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Engineer Name"
            />
          </div>
        </div>
      </div>

      {/* Assigned Tasks Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center">
            <span className="mr-2">📋</span>
            Assigned Tasks ({filteredTasks.length})
          </h2>
        </div>
        
        {filteredTasks.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engineer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTasks.map((task, index) => {
                  const engineer = getEngineerById(task.engineerId);
                  return (
                    <tr key={task.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{task.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{task.engineerName}</div>
                        <div className="text-sm text-gray-500">ID: {task.engineerId}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{engineer?.number || 'N/A'}</div>
                        <div className="text-sm text-gray-500">{engineer?.email || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          <div className="font-medium">{task.address.area}, {task.address.city}</div>
                          <div className="text-gray-500">{task.address.district}, {task.address.state} {task.address.pincode}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {task.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditTask(task)}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-500 text-lg mb-2">No tasks match the search criteria</p>
            <p className="text-gray-400">Try adjusting your filters or create a new task</p>
          </div>
        )}
      </div>

      {/* Modal for Task Assignment/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                {editingTask ? '✏️ Edit Task' : '➕ Assign New Task'}
              </h2>
            </div>
            
            <div className="p-6">
              {/* Engineer Selection for new tasks */}
              {!editingTask && (
                <div className="mb-6">
                  <label className="block font-medium text-gray-700 mb-2">Select Engineer</label>
                  <select
                    value={modalEngineer.id}
                    onChange={(e) => {
                      const selectedEngineer = engineers.find(eng => eng.id === e.target.value);
                      setModalEngineer(selectedEngineer);
                    }}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {engineers.map((engineer) => (
                      <option key={engineer.id} value={engineer.id}>
                        {engineer.name} (ID: {engineer.id})
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              {/* Current Engineer Info */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-3 flex items-center">
                  <span className="mr-2">👨‍🔧</span>
                  Engineer Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-blue-700">Name:</span>
                    <span className="text-blue-600 ml-2">{modalEngineer.name}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-700">ID:</span>
                    <span className="text-blue-600 ml-2">{modalEngineer.id}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-700">Contact:</span>
                    <span className="text-blue-600 ml-2">{modalEngineer.number}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-700">Email:</span>
                    <span className="text-blue-600 ml-2">{modalEngineer.email}</span>
                  </div>
                </div>
              </div>
              
              {/* Address Form */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700 mb-4 flex items-center">
                  <span className="mr-2">📍</span>
                  Task Location Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block font-medium text-gray-700 mb-1">Address Area *</label>
                    <input
                      type="text"
                      value={addressArea}
                      onChange={(e) => setAddressArea(e.target.value)}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Address Area (e.g., Downtown, Sector 5)"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter City"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">District *</label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter District"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">State *</label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter State (e.g., NY, CA)"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Pincode *</label>
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Pincode (e.g., 10001)"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end space-x-4">
              <button
                onClick={() => {
                  setAddressArea('');
                  setCity('');
                  setDistrict('');
                  setState('');
                  setPincode('');
                  setEditingTask(null);
                  setIsModalOpen(false);
                }}
                className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleAssignTask}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200 font-medium"
              >
                {editingTask ? 'Update Task' : 'Assign Task'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignTask;