import React, { useState, useEffect } from 'react';
import hrmApi from '../../ApiCalling/Hrm_Api';
import {
  FilePlus,
  CalendarDays,
  Clock,
  CheckCircle2,
  XCircle,
  Edit,
  Trash,
} from 'lucide-react';

const Leaves = () => {
  const [holidays, setHolidays] = useState([]);
  const [leaveBalances, setLeaveBalances] = useState([]);
  const [leaveNotes, setLeaveNotes] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    employeeId: '',
    from: '',
    to: '',
    type: 'Sick Leave',
    reason: '',
    status: 'Pending',
    isHalfDay: false,
    halfDayType: '',
  });
  const [editing, setEditing] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching data at:', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
      const [holidaysData, balancesData, notesData, requestsData, employeesData] = await Promise.all([
        hrmApi.getHolidays(),
        hrmApi.getLeaveBalances(),
        hrmApi.getLeaveNotes(),
        hrmApi.getLeaveRequests(),
        hrmApi.getEmployees(),
      ]);
      console.log('Fetched leave requests:', requestsData);
      console.log('Fetched employees:', employeesData);
      setHolidays(holidaysData || []);
      setLeaveBalances(balancesData || []);
      setLeaveNotes(notesData || []);
      setLeaveRequests(requestsData || []);
      setEmployees(employeesData || []);
      setFilteredEmployees(employeesData || []);
      if (requestsData && requestsData.length === 0) {
        console.log('No leave requests found in the database.');
      } else if (requestsData) {
        console.log('Successfully loaded leave requests:', requestsData.map((r) => r._id));
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.message, error.response?.data, error.response?.status);
      if (error.response?.status !== 404) {
        setError(`Failed to fetch data due to a server issue. ${error.message}. Status: ${error.response?.status || 'Unknown'}`);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'isHalfDay' && checked ? { to: formData.from, halfDayType: 'First Half' } : {}),
      ...(name === 'from' && formData.isHalfDay ? { to: value } : {}),
    });
  };

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredEmployees(
      employees.filter((employee) =>
        employee.name.toLowerCase().includes(term)
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.from || !formData.to || !formData.reason || !formData.employeeId) {
      setError('From date, to date, reason, and employee are required.');
      return;
    }
    if (formData.isHalfDay && !formData.halfDayType) {
      setError('Please select a half-day type (First Half or Second Half).');
      return;
    }
    // Validate Privilege Leave (must be within 60 days)
    if (formData.type === 'Privilege Leave') {
      const fromDate = new Date(formData.from);
      const now = new Date();
      const maxFutureDate = new Date(now.setDate(now.getDate() + 60));
      if (fromDate > maxFutureDate) {
        setError('Privilege Leave cannot be scheduled more than 60 days in advance.');
        return;
      }
    }

    try {
      const leaveData = {
        employeeId: formData.employeeId,
        from: formData.from,
        to: formData.isHalfDay ? formData.from : formData.to,
        type: formData.type,
        reason: formData.reason,
        isHalfDay: formData.isHalfDay,
        halfDayType: formData.isHalfDay ? formData.halfDayType : null,
        ...(editing && { status: formData.status }),
      };
      console.log('Submitting leave data:', leaveData);
      let response;
      if (editing) {
        response = await hrmApi.updateLeaveRequest(formData.id, leaveData);
        setLeaveRequests(
          leaveRequests.map((req) => (req._id === response._id ? response : req))
        );
      } else {
        response = await hrmApi.createLeaveRequest(leaveData);
        setLeaveRequests([...leaveRequests, response]);
      }
      console.log('API response after submit:', response);
      setFormData({
        id: null,
        employeeId: '',
        from: '',
        to: '',
        type: 'Sick Leave',
        reason: '',
        status: 'Pending',
        isHalfDay: false,
        halfDayType: '',
      });
      setEditing(false);
      setError(null);
      await fetchData();
    } catch (error) {
      console.error('Error submitting leave request:', error.message, error.response?.data, error.response?.status);
      setError(`Failed to submit leave request. ${error.message}. Status: ${error.response?.status || 'Unknown'}`);
    }
  };

  const handleEdit = (request) => {
    setFormData({
      id: request._id,
      employeeId: request.employeeId?._id || request.employeeId,
      from: new Date(request.from).toISOString().split('T')[0],
      to: new Date(request.to).toISOString().split('T')[0],
      type: request.type,
      reason: request.reason,
      status: request.status,
      isHalfDay: request.isHalfDay || false,
      halfDayType: request.halfDayType || '',
    });
    setEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this leave request?')) {
      try {
        await hrmApi.deleteLeaveRequest(id);
        setLeaveRequests(leaveRequests.filter((req) => req._id !== id));
        await fetchData();
        setError(null);
      } catch (error) {
        console.error('Error deleting leave request:', error.message, error.response?.data, error.response?.status);
        setError(`Failed to delete leave request. ${error.message}. Status: ${error.response?.status || 'Unknown'}`);
      }
    }
  };

  const handleApproval = async (id, status) => {
    try {
      const updatedLeave = await hrmApi.updateLeaveRequest(id, { status });
      setLeaveRequests(
        leaveRequests.map((req) => (req._id === updatedLeave._id ? updatedLeave : req))
      );
      await fetchData();
      setError(null);
    } catch (error) {
      console.error('Error updating leave request status:', error.message, error.response?.data, error.response?.status);
      setError(`Failed to update leave request status. ${error.message}. Status: ${error.response?.status || 'Unknown'}`);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">🌿 Leave Management System</h2>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          {/* Holiday List */}
          <div className="bg-white shadow rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
              <CalendarDays size={18} /> Paid Holidays 2025
            </h4>
            {holidays.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No holidays available.</p>
            ) : (
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="p-2">Sr. No.</th>
                    <th className="p-2">Occasion</th>
                    <th className="p-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {holidays.map((holiday, index) => (
                    <tr key={holiday._id} className="border-t">
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">{holiday.occasion || holiday.name}</td>
                      <td className="p-2">{new Date(holiday.date).toLocaleDateString('en-GB')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Leave Balances */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {leaveBalances.length === 0 ? (
              <p className="text-gray-500 text-center py-4 col-span-2">No leave balances available.</p>
            ) : (
              leaveBalances.map((balance) => (
                <div
                  key={balance._id}
                  className="bg-gradient-to-br from-white to-blue-100 p-4 rounded-xl shadow border"
                >
                  <h4 className="text-lg font-semibold">{balance.leaveType}</h4>
                  <p className="text-sm mt-1">
                    <span className="font-bold text-green-700">{balance.days}</span> days available
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Leave Policy Notes */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl shadow mb-6 text-sm">
            📌 <strong>Leave Policy Notes:</strong>
            <ul className="list-disc pl-5 mt-2">
              {leaveNotes.length === 0 ? (
                <li>No notes available.</li>
              ) : (
                leaveNotes.map((note, index) => <li key={index}>{note}</li>)
              )}
            </ul>
          </div>

          {/* Grid for Apply + My Leave Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Apply for Leave */}
            <div className="bg-white p-6 rounded-xl shadow border">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center gap-2">
                <FilePlus size={20} /> {editing ? 'Edit Leave Request' : 'Apply for Leave'}
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-3">
                  <input
                    type="date"
                    name="from"
                    value={formData.from}
                    onChange={handleInputChange}
                    className="peer w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 placeholder-transparent"
                    placeholder="From Date"
                    required
                  />
                  <label
                    htmlFor="from"
                    className="absolute left-2 -top-2.5 text-gray-700 text-sm font-semibold bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
                  >
                    From Date
                  </label>
                </div>
                {!formData.isHalfDay && (
                  <div className="relative mb-3">
                    <input
                      type="date"
                      name="to"
                      value={formData.to}
                      onChange={handleInputChange}
                      className="peer w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-200 placeholder-transparent"
                      placeholder="To Date"
                      required
                    />
                    <label
                      htmlFor="to"
                      className="absolute left-2 -top-2.5 text-gray-700 text-sm font-semibold bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
                    >
                      To Date
                    </label>
                  </div>
                )}
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="p-2 border rounded-lg mb-3 w-full focus:ring-2 focus:ring-blue-200"
                >
                  <option>Sick Leave</option>
                  <option>Privilege Leave</option>
                  <option>Casual Leave</option>
                  <option>Maternity Leave</option>
                </select>
                <div className="relative mb-3">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search employee..."
                    className="p-2 border rounded-lg w-full mb-2 focus:ring-2 focus:ring-blue-200"
                  />
                  <select
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleInputChange}
                    className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-200"
                    required
                  >
                    <option value="">Select Employee</option>
                    {filteredEmployees.map((employee) => (
                      <option key={employee._id} value={employee._id}>
                        {employee.name}
                      </option>
                    ))}
                  </select>
                  <label
                    htmlFor="employeeId"
                    className="absolute left-2 -top-2.5 text-gray-700 text-sm font-semibold bg-white px-1"
                  >
                    Employee
                  </label>
                </div>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="p-2 border rounded-lg mb-4 w-full focus:ring-2 focus:ring-blue-200"
                  placeholder="Reason"
                  required
                />
                <div className="relative mb-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="isHalfDay"
                      checked={formData.isHalfDay}
                      onChange={handleInputChange}
                      className="h-4 w-4"
                    />
                    <span>Half Day Leave</span>
                  </label>
                </div>
                {formData.isHalfDay && (
                  <div className="relative mb-3">
                    <select
                      name="halfDayType"
                      value={formData.halfDayType}
                      onChange={handleInputChange}
                      className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="First Half">First Half</option>
                      <option value="Second Half">Second Half</option>
                    </select>
                  </div>
                )}
                {editing && (
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="p-2 border rounded-lg mb-4 w-full focus:ring-2 focus:ring-blue-200"
                  >
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                )}
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg w-full transition-all"
                >
                  {editing ? 'Update Request' : 'Submit Request'}
                </button>
                {editing && (
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        id: null,
                        employeeId: '',
                        from: '',
                        to: '',
                        type: 'Sick Leave',
                        reason: '',
                        status: 'Pending',
                        isHalfDay: false,
                        halfDayType: '',
                      });
                      setEditing(false);
                      setError(null);
                    }}
                    className="mt-2 bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg w-full transition-all"
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>

            {/* My Leave Requests Table */}
            <div className="bg-white p-6 rounded-xl shadow border overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                📋 My Leave History
              </h3>
              {leaveRequests.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No leave requests found.</p>
              ) : (
                <table className="min-w-[500px] w-full text-sm text-left">
                  <thead className="bg-slate-100 text-slate-600">
                    <tr>
                      <th className="p-2">Employee</th>
                      <th className="p-2">From</th>
                      <th className="p-2">To</th>
                      <th className="p-2">Type</th>
                      <th className="p-2">Reason</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveRequests.map((request) => (
                      <tr key={request._id} className="border-t">
                        <td className="p-2">{request.employeeId?.name || 'Unknown'}</td>
                        <td className="p-2">
                          {new Date(request.from).toLocaleDateString('en-GB')}
                          {request.isHalfDay && ` (${request.halfDayType})`}
                        </td>
                        <td className="p-2">
                          {request.isHalfDay ? '-' : new Date(request.to).toLocaleDateString('en-GB')}
                        </td>
                        <td className="p-2">{request.type}</td>
                        <td className="p-2">{request.reason}</td>
                        <td className="p-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs inline-flex items-center gap-1 ${
                              request.status === 'Approved'
                                ? 'bg-green-600 text-white'
                                : request.status === 'Rejected'
                                ? 'bg-red-600 text-white'
                                : 'bg-amber-400 text-white'
                            }`}
                          >
                            {request.status === 'Approved' && <CheckCircle2 size={14} />}
                            {request.status === 'Rejected' && <XCircle size={14} />}
                            {request.status === 'Pending' && <Clock size={14} />}
                            {request.status}
                          </span>
                        </td>
                        <td className="p-2 space-x-1">
                          <button
                            onClick={() => handleEdit(request)}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded-lg text-xs"
                          >
                            <Edit size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(request._id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg text-xs"
                          >
                            <Trash size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Admin Panel for Pending Requests */}
          <div className="bg-white p-6 rounded-xl shadow border overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              🧑‍💼 Admin: Pending Leave Approvals
            </h3>
            {leaveRequests.filter((req) => req.status === 'Pending').length === 0 ? (
              <p className="text-gray-500 text-center py-4">No pending leave requests.</p>
            ) : (
              <table className="min-w-[700px] w-full text-sm text-left">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="p-2">Employee</th>
                    <th className="p-2">From</th>
                    <th className="p-2">To</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Reason</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveRequests
                    .filter((req) => req.status === 'Pending')
                    .map((request) => (
                      <tr key={request._id} className="border-t">
                        <td className="p-2">{request.employeeId?.name || 'Unknown'}</td>
                        <td className="p-2">
                          {new Date(request.from).toLocaleDateString('en-GB')}
                          {request.isHalfDay && ` (${request.halfDayType})`}
                        </td>
                        <td className="p-2">
                          {request.isHalfDay ? '-' : new Date(request.to).toLocaleDateString('en-GB')}
                        </td>
                        <td className="p-2">{request.type}</td>
                        <td className="p-2">{request.reason}</td>
                        <td className="p-2">
                          <span className="px-2 py-1 rounded-full text-xs inline-flex items-center gap-1 bg-amber-400 text-white">
                            <Clock size={14} />
                            {request.status}
                          </span>
                        </td>
                        <td className="p-2 space-x-1">
                          <button
                            onClick={() => handleApproval(request._id, 'Approved')}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-xs"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleApproval(request._id, 'Rejected')}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-xs"
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => handleEdit(request)}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded-lg text-xs"
                          >
                            <Edit size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(request._id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg text-xs"
                          >
                            <Trash size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Leaves;