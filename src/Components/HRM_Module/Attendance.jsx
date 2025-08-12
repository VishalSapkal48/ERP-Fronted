import React, { useState, useEffect, useRef } from 'react';
import hrmApi from '../../ApiCalling/Hrm_Api';
import * as XLSX from 'xlsx';

const Attendance = () => {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [attendanceData, setAttendanceData] = useState([]);
  const [departments, setDepartments] = useState(['All']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locationCard, setLocationCard] = useState({ show: false, type: '', data: null, position: { x: 0, y: 0 } });
  const tableRef = useRef(null);

  useEffect(() => {
    if (new Date(endDate) < new Date(startDate)) {
      setError('End date cannot be before start date');
      return;
    }
    setIsLoading(true);
    setError(null);
    hrmApi
      .getAttendanceByRange(startDate, endDate)
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : response;
        if (data.length === 0) {
          setError('No attendance data available for the selected date range');
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
  }, [startDate, endDate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationCard.show && tableRef.current && !tableRef.current.contains(event.target)) {
        setLocationCard({ show: false, type: '', data: null, position: { x: 0, y: 0 } });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [locationCard.show]);

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

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this attendance record?')) {
      try {
        await hrmApi.deleteAttendance(id);
        setAttendanceData((prev) => prev.filter((item) => item._id !== id));
      } catch (error) {
        setError(error.message || 'Failed to delete attendance');
      }
    }
  };

  const handleExcelExport = () => {
    const headers = ['Name', 'Department', 'jobTitle', 'Date', 'Check In', 'Check Out', 'Work Hours', 'Status', 'Check In Location', 'Check Out Location'];
    const data = filteredStaff.map((staff) => [
      staff.employeeId?.name || 'Unknown',
      staff.employeeId?.department || 'N/A',
      staff.employeeId?.jobTitle || 'N/A',
      staff.date ? new Date(staff.date).toLocaleDateString() : 'N/A',
      staff.checkIn || 'N/A',
      staff.checkOut || 'N/A',
      staff.workHours || 'N/A',
      staff.status || 'N/A',
      staff.checkInLocation ? JSON.stringify(staff.checkInLocation) : 'N/A',
      staff.checkOutLocation ? JSON.stringify(staff.checkOutLocation) : 'N/A',
    ]);
    const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Attendance');
    XLSX.writeFile(wb, `attendance_${startDate}_to_${endDate}.xlsx`);
  };

  const handleLocationClick = (e, type, locationData) => {
    const rect = e.target.getBoundingClientRect();
    setLocationCard({
      show: true,
      type,
      data: locationData || { latitude: 'N/A', longitude: 'N/A', address: 'N/A' },
      position: { x: rect.left, y: rect.bottom + window.scrollY },
    });
  };

  const closeLocationCard = () => {
    setLocationCard({ show: false, type: '', data: null, position: { x: 0, y: 0 } });
  };

  return (
    <div className=" p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">
          Staff Attendance Management
        </h1>

        {error && (
          <div className="mb-4 p-3 rounded-md bg-red-100 text-red-800 text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 text-center">Total Staff</p>
                <p className="text-xl font-bold text-gray-900 text-center">{stats.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 text-center">Present</p>
                <p className="text-xl font-bold text-gray-900 text-center">{stats.present}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 text-center">Absent</p>
                <p className="text-xl font-bold text-gray-900 text-center">{stats.absent}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 text-center">On Leave</p>
                <p className="text-xl font-bold text-gray-900 text-center">{stats.onLeave}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto justify-center">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto text-center"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto text-center"
            />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto text-center"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="flex w-full md:w-auto gap-3 justify-center">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search staff..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-center"
              />
            </div>
            <button
              onClick={handleExcelExport}
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
            >
              Export Excel
            </button>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow relative" ref={tableRef}>
          {isLoading ? (
            <div className="p-4 text-center text-gray-600">Loading...</div>
          ) : error ? (
            <div className="p-4 text-center text-red-600">{error}</div>
          ) : attendanceData.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No attendance data available</div>
          ) : (
            <table className="min-w-[900px] w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-center text-sm font-medium px-4 py-2 text-gray-500">Staff</th>
                  <th className="text-center text-sm font-medium px-4 py-2 text-gray-500 hidden sm:table-cell">
                    Department
                  </th>
                  <th className="text-center text-sm font-medium px-4 py-2 text-gray-500">Date</th>
                  <th className="text-center text-sm font-medium px-4 py-2 text-gray-500">Check In</th>
                  <th className="text-center text-sm font-medium px-4 py-2 text-gray-500">Check Out</th>
                  <th className="text-center text-sm font-medium px-4 py-2 text-gray-500 hidden md:table-cell">
                    Work Hours
                  </th>
                  <th className="text-center text-sm font-medium px-4 py-2 text-gray-500">Status</th>
                  <th className="text-center text-sm font-medium px-4 py-2 text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStaff.map((staff) => (
                  <tr key={`${staff._id}-${staff.date}`} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-center">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {staff.employeeId?.name || 'Unknown'}
                        </p>
                        <p className="text-xs text-gray-500">{staff.employeeId?.jobTitle || 'N/A'}</p>
                        <p className="text-xs text-gray-500 sm:hidden">
                          {staff.employeeId?.department || 'N/A'}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-center hidden sm:table-cell">
                      {staff.employeeId?.department || 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-sm text-center">
                      {staff.date ? new Date(staff.date).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-sm text-center">
                      {staff.checkIn ? (
                        <span
                          className="cursor-pointer text-blue-600 hover:underline"
                          onClick={(e) => handleLocationClick(e, 'Check In', staff.checkInLocation)}
                        >
                          {staff.checkIn}
                        </span>
                      ) : (
                        'N/A'
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-center">
                      {staff.checkOut ? (
                        <span
                          className="cursor-pointer text-blue-600 hover:underline"
                          onClick={(e) => handleLocationClick(e, 'Check Out', staff.checkOutLocation)}
                        >
                          {staff.checkOut}
                        </span>
                      ) : (
                        'N/A'
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-center hidden md:table-cell">
                      {staff.workHours || 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          staff.status
                        )}`}
                      >
                        {staff.status ? staff.status.charAt(0).toUpperCase() + staff.status.slice(1) : 'N/A'}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2 justify-center">
                      <button
                        onClick={() => handleDelete(staff._id)}
                        className="bg-red-600 text-white px-2 py-1 rounded-md text-xs hover:bg-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {locationCard.show && (
            <div
              className="fixed bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-50 max-w-sm"
              style={{ top: locationCard.position.y, left: locationCard.position.x }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{locationCard.type} Location</h3>
                <button
                  onClick={closeLocationCard}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Address:</strong> {locationCard.data?.address || 'N/A'}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Latitude:</strong> {locationCard.data?.latitude || 'N/A'}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Longitude:</strong> {locationCard.data?.longitude || 'N/A'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;