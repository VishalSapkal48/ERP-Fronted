import React, { useState, useEffect } from 'react';
import hrmApi from '../../ApiCalling/Hrm_Api';

function Profile() {
  const [employee, setEmployee] = useState({
    name: '',
    department: '',
    gender: '',
    employeeId: '',
    email: '',
    username: '',
    image: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const data = await hrmApi.getEmployeeById(''); // Replace with actual employeeId
        setEmployee({
          name: data.name || '',
          department: data.department || '',
          gender: data.gender || '',
          employeeId: data.employeeId || '',
          email: data.email || '',
          username: data.username || '',
          image: data.profileImage || ''
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployeeData();

    // Update current date/time (IST)
    const updateTime = () => {
      setCurrentDateTime(new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...employee, profileImage: employee.image };
      await hrmApi.updateEmployee(employee.employeeId, updatedData); // Use employeeId for update
      setEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="text-sm text-gray-500 mb-4">Current Date & Time: {currentDateTime}</div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <img
            src={employee.image ? `data:image/jpeg;base64,${employee.image}` : 'https://via.placeholder.com/150'}
            alt="Employee"
            className="w-36 h-36 rounded-full mb-4"
          />
        </div>
        {editing ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                value={employee.department}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                name="gender"
                value={employee.gender}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Employee ID</label>
              <input
                type="text"
                name="employeeId"
                value={employee.employeeId}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={employee.username}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <div><strong>Name:</strong> {employee.name}</div>
            <div><strong>Department:</strong> {employee.department}</div>
            <div><strong>Gender:</strong> {employee.gender}</div>
            <div><strong>Employee ID:</strong> {employee.employeeId}</div>
            <div><strong>Email:</strong> {employee.email}</div>
            <div><strong>Username:</strong> {employee.username}</div>
            <button
              onClick={() => setEditing(true)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit Profile
            </button>
            <button
              onClick={() => alert('Reset Password functionality to be implemented')}
              className="ml-2 mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Reset Password
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default Profile;