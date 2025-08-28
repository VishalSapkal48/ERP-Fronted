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

  const handleSubmit = async () => {
    if (!formData.from || !formData.to || !formData.reason || !formData.employeeId) {
      setError('From date, to date, reason, and employee are required.');
      return;
    }
    if (formData.isHalfDay && !formData.halfDayType) {
      setError('Please select a half-day type (First Half or Second Half).');
      return;
    }
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
    <div className="p-3 sm:p-4 md:p-6 bg-gray-100 min-h-screen w-full overflow-x-hidden">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 flex items-center gap-2">
        <FilePlus className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" /> Leave Management System
      </h2>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-6 sm:py-8">
          <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          {/* Holiday List */}
          <div className="bg-white shadow rounded-xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-blue-700 mb-2 sm:mb-4 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" /> Paid Holidays 2025
            </h4>
            {holidays.length === 0 ? (
              <p className="text-gray-500 text-center py-4 text-xs sm:text-sm md:text-base">No holidays available.</p>
            ) : (
              <div className="space-y-2 sm:hidden">
                {holidays.map((holiday, index) => (
                  <div key={holiday._id} className="border rounded-lg p-3 bg-gray-50">
                    <p className="text-xs font-semibold">#{index + 1}</p>
                    <p className="text-xs"><strong>Occasion:</strong> {holiday.occasion || holiday.name}</p>
                    <p className="text-xs"><strong>Date:</strong> {new Date(holiday.date).toLocaleDateString('en-GB')}</p>
                  </div>
                ))}
              </div>
            )}
            {holidays.length > 0 && (
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-xs sm:text-sm md:text-base text-left">
                  <thead className="bg-slate-100 text-slate-600">
                    <tr>
                      <th className="p-2 sm:p-3">Sr. No.</th>
                      <th className="p-2 sm:p-3">Occasion</th>
                      <th className="p-2 sm:p-3">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holidays.map((holiday, index) => (
                      <tr key={holiday._id} className="border-t">
                        <td className="p-2 sm:p-3">{index + 1}</td>
                        <td className="p-2 sm:p-3">{holiday.occasion || holiday.name}</td>
                        <td className="p-2 sm:p-3">{new Date(holiday.date).toLocaleDateString('en-GB')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Leave Balances */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
            {leaveBalances.length === 0 ? (
              <p className="text-gray-500 text-center py-4 col-span-full text-xs sm:text-sm md:text-base">No leave balances available.</p>
            ) : (
              leaveBalances.map((balance) => (
                <div
                  key={balance._id}
                  className="bg-gradient-to-br from-white to-blue-100 p-3 sm:p-4 md:p-6 rounded-xl shadow border"
                >
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold">{balance.leaveType}</h4>
                  <p className="text-xs sm:text-sm md:text-base mt-1">
                    <span className="font-bold text-green-700">{balance.days}</span> days available
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Leave Policy Notes */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 md:p-6 rounded-xl shadow mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
            <p className="font-semibold flex items-center gap-2">📌 Leave Policy Notes:</p>
            <ul className="list-disc pl-5 mt-2">
              {leaveNotes.length === 0 ? (
                <li>No notes available.</li>
              ) : (
                leaveNotes.map((note, index) => <li key={index}>{note}</li>)
              )}
            </ul>
          </div>

          {/* Grid for Apply + My Leave Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
            {/* Apply for Leave */}
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow border">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-blue-600 flex items-center gap-2">
                <FilePlus className="w-4 h-4 sm:w-5 sm:h-5" /> {editing ? 'Edit Leave Request' : 'Apply for Leave'}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="relative">
                  <input
                    type="date"
                    name="from"
                    value={formData.from}
                    onChange={handleInputChange}
                    className="peer w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 placeholder-transparent text-xs sm:text-sm md:text-base"
                    placeholder="From Date"
                    required
                  />
                  <label
                    htmlFor="from"
                    className="absolute left-2 -top-2.5 text-gray-700 text-xs sm:text-sm font-semibold bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs sm:peer-focus:text-sm"
                  >
                    From Date
                  </label>
                </div>
                {!formData.isHalfDay && (
                  <div className="relative">
                    <input
                      type="date"
                      name="to"
                      value={formData.to}
                      onChange={handleInputChange}
                      className="peer w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 placeholder-transparent text-xs sm:text-sm md:text-base"
                      placeholder="To Date"
                      required
                    />
                    <label
                      htmlFor="to"
                      className="absolute left-2 -top-2.5 text-gray-700 text-xs sm:text-sm font-semibold bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs sm:peer-focus:text-sm"
                    >
                      To Date
                    </label>
                  </div>
                )}
              <div className="mb-4">
  <label
    className="block text-gray-600 text-xs sm:text-sm font-medium mb-2"
    htmlFor="type"
  >
    Leave Type
  </label>
  <div className="relative">
    <select
      name="type"
      value={formData.type}
      onChange={handleInputChange}
      className="p-2 sm:p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-200 text-xs sm:text-sm md:text-base appearance-none"
    >
      <option value="Sick Leave">Sick Leave</option>
      <option value="Privilege Leave">Privilege Leave</option>
      <option value="Casual Leave">Casual Leave</option>
      <option value="Maternity Leave">Maternity Leave</option>
    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>

</div>

                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search employee..."
                    className="p-2 sm:p-3 border rounded-lg w-full mb-2 focus:ring-2 focus:ring-blue-200 text-xs sm:text-sm md:text-base"
                  />
                <div className="mb-4">
  <label
    className="block text-gray-600 text-xs sm:text-sm font-medium mb-2"
    htmlFor="employeeId"
  >
    Employee
  </label>
  <div className="relative">
    <select
      name="employeeId"
      value={formData.employeeId}
      onChange={handleInputChange}
      required
      className="p-2 sm:p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-200 text-xs sm:text-sm md:text-base appearance-none"
    >
      <option value="">Select Employee</option>
      {filteredEmployees.map((employee) => (
        <option key={employee._id} value={employee._id}>
          {employee.name}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
 
</div>

                  <label
                    htmlFor="employeeId"
                    className="absolute left-2 -top-2.5 text-gray-700 text-xs sm:text-sm font-semibold bg-white px-1"
                  >
                    Employee
                  </label>
                </div>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="p-2 sm:p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-200 text-xs sm:text-sm md:text-base min-h-[80px] sm:min-h-[100px]"
                  placeholder="Reason"
                  required
                />
                <div className="relative">
                  <label className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
                    <input
                      type="checkbox"
                      name="isHalfDay"
                      checked={formData.isHalfDay}
                      onChange={handleInputChange}
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                    <span>Half Day Leave</span>
                  </label>
                </div>
                {formData.isHalfDay && (
                 <div className="mb-4">
  <label
    className="block text-gray-600 text-xs sm:text-sm font-medium mb-2"
    htmlFor="halfDayType"
  >
    Half Day Type
  </label>
  <div className="relative">
    <select
      name="halfDayType"
      value={formData.halfDayType}
      onChange={handleInputChange}
      className="p-2 sm:p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-200 text-xs sm:text-sm md:text-base appearance-none"
    >
      <option value="First Half">First Half</option>
      <option value="Second Half">Second Half</option>
    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>

</div>

                )}
                {editing && (
                 <div className="mb-4">
  <label
    className="block text-gray-600 text-xs sm:text-sm font-medium mb-2"
    htmlFor="status"
  >
    Status
  </label>
  <div className="relative">
    <select
      name="status"
      value={formData.status}
      onChange={handleInputChange}
      className="p-2 sm:p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-200 text-xs sm:text-sm md:text-base appearance-none"
    >
      <option value="Pending">Pending</option>
      <option value="Approved">Approved</option>
      <option value="Rejected">Rejected</option>
    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>

</div>

                )}
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-lg w-full transition-all text-xs sm:text-sm md:text-base min-h-[44px]"
                >
                  {editing ? 'Update Request' : 'Submit Request'}
                </button>
                {editing && (
                  <button
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
                    className="mt-2 bg-gray-600 hover:bg-gray-700 text-white p-2 sm:p-3 rounded-lg w-full transition-all text-xs sm:text-sm md:text-base min-h-[44px]"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {/* My Leave Requests Table */}
            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow border">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-blue-600 flex items-center gap-2">
                <FilePlus className="w-4 h-4 sm:w-5 sm:h-5" /> My Leave History
              </h3>
              {leaveRequests.length === 0 ? (
                <p className="text-gray-500 text-center py-4 text-xs sm:text-sm md:text-base">No leave requests found.</p>
              ) : (
                <>
                  <div className="space-y-2 sm:hidden">
                    {leaveRequests.map((request) => (
                      <div key={request._id} className="border rounded-lg p-3 bg-gray-50">
                        <p className="text-xs"><strong>Employee:</strong> {request.employeeId?.name || 'Unknown'}</p>
                        <p className="text-xs">
                          <strong>From:</strong> {new Date(request.from).toLocaleDateString('en-GB')}
                          {request.isHalfDay && ` (${request.halfDayType})`}
                        </p>
                        <p className="text-xs"><strong>To:</strong> {request.isHalfDay ? '-' : new Date(request.to).toLocaleDateString('en-GB')}</p>
                        <p className="text-xs"><strong>Type:</strong> {request.type}</p>
                        <p className="text-xs"><strong>Reason:</strong> {request.reason}</p>
                        <p className="text-xs">
                          <strong>Status:</strong>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                              request.status === 'Approved'
                                ? 'bg-green-600 text-white'
                                : request.status === 'Rejected'
                                ? 'bg-red-600 text-white'
                                : 'bg-amber-400 text-white'
                            }`}
                          >
                            {request.status === 'Approved' && <CheckCircle2 className="w-3 h-3" />}
                            {request.status === 'Rejected' && <XCircle className="w-3 h-3" />}
                            {request.status === 'Pending' && <Clock className="w-3 h-3" />}
                            {request.status}
                          </span>
                        </p>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => handleEdit(request)}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded-lg text-xs min-h-[36px]"
                          >
                            <Edit className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleDelete(request._id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg text-xs min-h-[36px]"
                          >
                            <Trash className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm md:text-base text-left">
                      <thead className="bg-slate-100 text-slate-600">
                        <tr>
                          <th className="p-2 sm:p-3">Employee</th>
                          <th className="p-2 sm:p-3">From</th>
                          <th className="p-2 sm:p-3">To</th>
                          <th className="p-2 sm:p-3">Type</th>
                          <th className="p-2 sm:p-3">Reason</th>
                          <th className="p-2 sm:p-3">Status</th>
                          <th className="p-2 sm:p-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaveRequests.map((request) => (
                          <tr key={request._id} className="border-t">
                            <td className="p-2 sm:p-3">{request.employeeId?.name || 'Unknown'}</td>
                            <td className="p-2 sm:p-3">
                              {new Date(request.from).toLocaleDateString('en-GB')}
                              {request.isHalfDay && ` (${request.halfDayType})`}
                            </td>
                            <td className="p-2 sm:p-3">
                              {request.isHalfDay ? '-' : new Date(request.to).toLocaleDateString('en-GB')}
                            </td>
                            <td className="p-2 sm:p-3">{request.type}</td>
                            <td className="p-2 sm:p-3">{request.reason}</td>
                            <td className="p-2 sm:p-3">
                              <span
                                className={`px-2 py-1 rounded-full text-xs sm:text-sm inline-flex items-center gap-1 ${
                                  request.status === 'Approved'
                                    ? 'bg-green-600 text-white'
                                    : request.status === 'Rejected'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-amber-400 text-white'
                                }`}
                              >
                                {request.status === 'Approved' && <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />}
                                {request.status === 'Rejected' && <XCircle className="w-3 h-3 sm:w-4 sm:h-4" />}
                                {request.status === 'Pending' && <Clock className="w-3 h-3 sm:w-4 sm:h-4" />}
                                {request.status}
                              </span>
                            </td>
                            <td className="p-2 sm:p-3 space-x-1">
                              <button
                                onClick={() => handleEdit(request)}
                                className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded-lg text-xs sm:text-sm min-h-[36px]"
                              >
                                <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(request._id)}
                                className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg text-xs sm:text-sm min-h-[36px]"
                              >
                                <Trash className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Admin Panel for Pending Requests */}
          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow border">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-blue-600 flex items-center gap-2">
              <FilePlus className="w-4 h-4 sm:w-5 sm:h-5" /> Admin: Pending Leave Approvals
            </h3>
            {leaveRequests.filter((req) => req.status === 'Pending').length === 0 ? (
              <p className="text-gray-500 text-center py-4 text-xs sm:text-sm md:text-base">No pending leave requests.</p>
            ) : (
              <>
                <div className="space-y-2 sm:hidden">
                  {leaveRequests
                    .filter((req) => req.status === 'Pending')
                    .map((request) => (
                      <div key={request._id} className="border rounded-lg p-3 bg-gray-50">
                        <p className="text-xs"><strong>Employee:</strong> {request.employeeId?.name || 'Unknown'}</p>
                        <p className="text-xs">
                          <strong>From:</strong> {new Date(request.from).toLocaleDateString('en-GB')}
                          {request.isHalfDay && ` (${request.halfDayType})`}
                        </p>
                        <p className="text-xs"><strong>To:</strong> {request.isHalfDay ? '-' : new Date(request.to).toLocaleDateString('en-GB')}</p>
                        <p className="text-xs"><strong>Type:</strong> {request.type}</p>
                        <p className="text-xs"><strong>Reason:</strong> {request.reason}</p>
                        <p className="text-xs">
                          <strong>Status:</strong>
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-amber-400 text-white">
                            <Clock className="w-3 h-3" />
                            {request.status}
                          </span>
                        </p>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          <button
                            onClick={() => handleApproval(request._id, 'Approved')}
                            className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-lg text-xs min-h-[36px]"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleApproval(request._id, 'Rejected')}
                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg text-xs min-h-[36px]"
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => handleEdit(request)}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded-lg text-xs min-h-[36px]"
                          >
                            <Edit className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleDelete(request._id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg text-xs min-h-[36px]"
                          >
                            <Trash className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm md:text-base text-left">
                    <thead className="bg-slate-100 text-slate-600">
                      <tr>
                        <th className="p-2 sm:p-3">Employee</th>
                        <th className="p-2 sm:p-3">From</th>
                        <th className="p-2 sm:p-3">To</th>
                        <th className="p-2 sm:p-3">Type</th>
                        <th className="p-2 sm:p-3">Reason</th>
                        <th className="p-2 sm:p-3">Status</th>
                        <th className="p-2 sm:p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveRequests
                        .filter((req) => req.status === 'Pending')
                        .map((request) => (
                          <tr key={request._id} className="border-t">
                            <td className="p-2 sm:p-3">{request.employeeId?.name || 'Unknown'}</td>
                            <td className="p-2 sm:p-3">
                              {new Date(request.from).toLocaleDateString('en-GB')}
                              {request.isHalfDay && ` (${request.halfDayType})`}
                            </td>
                            <td className="p-2 sm:p-3">
                              {request.isHalfDay ? '-' : new Date(request.to).toLocaleDateString('en-GB')}
                            </td>
                            <td className="p-2 sm:p-3">{request.type}</td>
                            <td className="p-2 sm:p-3">{request.reason}</td>
                            <td className="p-2 sm:p-3">
                              <span className="px-2 py-1 rounded-full text-xs sm:text-sm inline-flex items-center gap-1 bg-amber-400 text-white">
                                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                {request.status}
                              </span>
                            </td>
                            <td className="p-2 sm:p-3 space-x-1 flex flex-wrap gap-1">
                              <button
                                onClick={() => handleApproval(request._id, 'Approved')}
                                className="bg-green-600 hover:bg-green-700 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm min-h-[36px]"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleApproval(request._id, 'Rejected')}
                                className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm min-h-[36px]"
                              >
                                Reject
                              </button>
                              <button
                                onClick={() => handleEdit(request)}
                                className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded-lg text-xs sm:text-sm min-h-[36px]"
                              >
                                <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(request._id)}
                                className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg text-xs sm:text-sm min-h-[36px]"
                              >
                                <Trash className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Leaves;