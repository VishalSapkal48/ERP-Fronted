import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const hrmApi = {
  // Employee APIs
  createEmployee: async (employeeData) => {
    try {
      const response = await axios.post(`${API_URL}/employees`, employeeData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create employee. Please check the server connection.');
    }
  },
 getEmployees: async () => {
    try {
      const response = await axios.get(`${API_URL}/employees`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch employees. Please check the server connection.');
    }
  },
  getEmployeeById: async (employeeId) => {
    try {
      const response = await axios.get(`${API_URL}/employees/employeeId/${employeeId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch employee. Please check the server connection.');
    }
  },
  updateEmployee: async (employeeId, employeeData) => {
    try {
      const response = await axios.put(`${API_URL}/employees/employeeId/${employeeId}`, employeeData); // Changed to /employeeId/:employeeId
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update employee. Please check the server connection.');
    }
  },
  deleteEmployee: async (employeeId) => {
    try {
      const response = await axios.delete(`${API_URL}/employees/employeeId/${employeeId}`); // Changed to /employeeId/:employeeId
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete employee. Please check the server connection.');
    }
  },

  // Attendance APIs
  createAttendance: async (attendanceData) => {
    try {
      const response = await axios.post(`${API_URL}/attendance`, attendanceData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create attendance record. Please check the server connection.');
    }
  },
  getAttendanceByRange: async (startDate, endDate) => {
    try {
      const response = await axios.get(`${API_URL}/attendance?startDate=${startDate}&endDate=${endDate}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch attendance records. Please check the server connection.');
    }
  },
  updateAttendance: async (id, attendanceData) => {
    try {
      const response = await axios.put(`${API_URL}/attendance/${id}`, attendanceData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update attendance record. Please check the server connection.');
    }
  },
  deleteAttendance: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/attendance/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete attendance record. Please check the server connection.');
    }
  },

  // Event APIs
  getEvents: async () => {
    try {
      const response = await axios.get(`${API_URL}/events`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch events. Please check the server connection.');
    }
  },
  createEvent: async (eventData) => {
    try {
      const response = await axios.post(`${API_URL}/events`, eventData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create event. Please check the server connection.');
    }
  },
  updateEvent: async (id, eventData) => {
    try {
      const response = await axios.put(`${API_URL}/events/${id}`, eventData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update event. Please check the server connection.');
    }
  },
  deleteEvent: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/events/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete event. Please check the server connection.');
    }
  },

  // Payroll APIs
  getPayrollComponents: async (employeeId) => {
    try {
      const response = await axios.get(`${API_URL}/employees/${employeeId}/payroll-components`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch payroll components. Please check the server connection.');
    }
  },
  createPayrollComponent: async (employeeId, componentData) => {
    try {
      const response = await axios.post(`${API_URL}/employees/${employeeId}/payroll-components`, componentData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create payroll component. Please check the server connection.');
    }
  },
  updatePayrollComponent: async (employeeId, componentId, componentData) => {
    try {
      const response = await axios.put(
        `${API_URL}/employees/${employeeId}/payroll-components/${componentId}`,
        componentData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update payroll component. Please check the server connection.');
    }
  },
  getAllEmployeesPayroll: async () => {
    try {
      const response = await axios.get(`${API_URL}/employees/all/payroll`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch all employees payroll data. Please check the server connection.');
    }
  },

  // Task APIs
  getTasks: async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch tasks. Please check the server connection.');
    }
  },
  createTask: async (taskData) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, taskData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create task. Please check the server connection.');
    }
  },
  updateTask: async (id, taskData) => {
    try {
      const response = await axios.put(`${API_URL}/tasks/${id}`, taskData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update task. Please check the server connection.');
    }
  },
  deleteTask: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/tasks/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete task. Please check the server connection.');
    }
  },

  // Leave APIs
  getHolidays: async () => {
    try {
      const response = await axios.get(`${API_URL}/leaves/holidays`);
      console.log('API Response for getHolidays:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error for getHolidays:', error.message, error.response?.data, error.response?.status);
      throw new Error(error.response?.data?.message || 'Failed to fetch holidays.');
    }
  },
  getLeaveBalances: async () => {
    try {
      const response = await axios.get(`${API_URL}/leaves/leave-balances`);
      console.log('API Response for getLeaveBalances:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error for getLeaveBalances:', error.message, error.response?.data, error.response?.status);
      throw new Error(error.response?.data?.message || 'Failed to fetch leave balances.');
    }
  },
  getLeaveNotes: async () => {
    try {
      const response = await axios.get(`${API_URL}/leaves/leave-notes`);
      console.log('API Response for getLeaveNotes:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error for getLeaveNotes:', error.message, error.response?.data, error.response?.status);
      throw new Error(error.response?.data?.message || 'Failed to fetch leave notes.');
    }
  },
  getLeaveRequests: async () => {
    try {
      const response = await axios.get(`${API_URL}/leaves/requests`);
      console.log('API Response for getLeaveRequests:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error for getLeaveRequests:', error.message, error.response?.data, error.response?.status);
      throw new Error(error.response?.data?.message || 'Failed to fetch leave requests.');
    }
  },
  createLeaveRequest: async (leaveData) => {
    try {
      const response = await axios.post(`${API_URL}/leaves/requests`, leaveData);
      console.log('API Response for createLeaveRequest:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error for createLeaveRequest:', error.message, error.response?.data, error.response?.status);
      throw new Error(error.response?.data?.message || 'Failed to create leave request.');
    }
  },
  updateLeaveRequest: async (id, leaveData) => {
    try {
      const response = await axios.put(`${API_URL}/leaves/requests/${id}`, leaveData);
      console.log('API Response for updateLeaveRequest:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error for updateLeaveRequest:', error.message, error.response?.data, error.response?.status);
      throw new Error(error.response?.data?.message || 'Failed to update leave request.');
    }
  },
  deleteLeaveRequest: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/leaves/requests/${id}`);
      console.log('API Response for deleteLeaveRequest:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error for deleteLeaveRequest:', error.message, error.response?.data, error.response?.status);
      throw new Error(error.response?.data?.message || 'Failed to delete leave request.');
    }
  },
};

export default hrmApi;