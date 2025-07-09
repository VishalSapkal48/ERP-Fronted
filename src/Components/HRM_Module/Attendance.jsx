import React, { useState, useEffect } from 'react';
import hrmApi from '../../ApiCalling/Hrm_Api';
import { UserCheck, UserX, Coffee, Users, Search, Download } from 'lucide-react';

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [attendanceData, setAttendanceData] = useState([]);
  const [departments, setDepartments] = useState(['All']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    hrmApi
      .getAttendance(selectedDate)
      .then((response) => {
        console.log('Attendance data received:', response);
        const data = Array.isArray(response.data) ? response.data : response;
        if (data.length === 0) {
          setError('No attendance data available for the selected date');
        }
        setAttendanceData(data);
        const depts = ['All', ...new Set(data.map((item) => item.employeeId?.department || ''))];
        setDepartments(depts);
      })
      .catch((error) => {
        console.error('Error fetching attendance:', error);
        setError(error.message || 'Failed to fetch attendance data');
      })
      .finally(() => setIsLoading(false));
  }, [selectedDate]);

  const filteredStaff = attendanceData.filter((staff) => {
    const matchesSearch =
      (staff.employeeId?.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (staff.employeeId?.department?.toLowerCase() || '').includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === 'All' || (staff.employeeId?.department || '') === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const getAttendanceStats = () => {
    const present = attendanceData.filter((s) => s.status === 'present').length;
    const absent = attendanceData.filter((s) => s.status === 'absent').length;
    const onLeave = attendanceData.filter((s) => s.status === 'leave').length;
    const total = attendanceData.length;
    return { present, absent, onLeave, total };
  };

  const stats = getAttendanceStats();

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'leave':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <UserCheck className="w-4 h-4" />;
      case 'absent':
        return <UserX className="w-4 h-4" />;
      case 'leave':
        return <Coffee className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const handleExport = () => {
    const headers = ['Name,Department,Position,Check In,Check Out,Work Hours,Status'];
    const rows = filteredStaff.map(
      (staff) =>
        `${staff.employeeId?.name || 'Unknown'},${staff.employeeId?.department || 'N/A'},${staff.employeeId?.position || 'N/A'},${staff.checkIn || 'N/A'},${staff.checkOut || 'N/A'},${staff.workHours || 'N/A'},${staff.status || 'N/A'}`
    );
    const csvContent = [...headers, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `attendance_${selectedDate}.csv`);
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 sm:p-6 lg:ml-64 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
          Staff Attendance Management
        </h1>

        {error && (
          <div className="mb-4 p-3 rounded-md bg-red-100 text-red-800">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Total Staff</p>
                <p className="text-xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <Users className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Present</p>
                <p className="text-xl font-bold text-gray-900">{stats.present}</p>
              </div>
              <UserCheck className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Absent</p>
                <p className="text-xl font-bold text-gray-900">{stats.absent}</p>
              </div>
              <UserX className="w-6 h-6 text-red-500" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">On Leave</p>
                <p className="text-xl font-bold text-gray-900">{stats.onLeave}</p>
              </div>
              <Coffee className="w-6 h-6 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto"
            />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="flex w-full md:w-auto gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search staff..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <button
              onClick={handleExport}
              className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm hover:bg-green-700"
            >
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          {isLoading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : error ? (
            <div className="p-4 text-center text-red-600">{error}</div>
          ) : attendanceData.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No attendance data available</div>
          ) : (
            <table className="min-w-[700px] w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left text-sm font-medium px-4 py-2 text-gray-500">Staff</th>
                  <th className="text-left text-sm font-medium px-4 py-2 text-gray-500 hidden sm:table-cell">
                    Department
                  </th>
                  <th className="text-left text-sm font-medium px-4 py-2 text-gray-500">Check In</th>
                  <th className="text-left text-sm font-medium px-4 py-2 text-gray-500">Check Out</th>
                  <th className="text-left text-sm font-medium px-4 py-2 text-gray-500 hidden md:table-cell">
                    Work Hours
                  </th>
                  <th className="text-left text-sm font-medium px-4 py-2 text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStaff.map((staff) => (
                  <tr key={staff._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {staff.employeeId?.name || 'Unknown'}
                        </p>
                        <p className="text-xs text-gray-500">{staff.employeeId?.position || 'N/A'}</p>
                        <p className="text-xs text-gray-500 sm:hidden">
                          {staff.employeeId?.department || 'N/A'}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell text-sm">
                      {staff.employeeId?.department || 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-sm">{staff.checkIn || 'N/A'}</td>
                    <td className="px-4 py-3 text-sm">{staff.checkOut || 'N/A'}</td>
                    <td className="px-4 py-3 text-sm">{staff.workHours || 'N/A'}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          staff.status
                        )}`}
                      >
                        {getStatusIcon(staff.status)}
                        <span className="hidden sm:inline">
                          {staff.status ? staff.status.charAt(0).toUpperCase() + staff.status.slice(1) : 'N/A'}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;