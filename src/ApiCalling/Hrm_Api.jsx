import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const hrmApi = {
  createEmployee: async (employeeData) => {
    try {
      const response = await axios.post(`${API_URL}/employees`, employeeData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create employee');
    }
  },
  getEmployees: async () => {
    try {
      const response = await axios.get(`${API_URL}/employees`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch employees');
    }
  },
  getEmployeeById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/employees/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch employee');
    }
  },
  updateEmployee: async (id, employeeData) => {
    try {
      const response = await axios.put(`${API_URL}/employees/${id}`, employeeData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update employee');
    }
  },
  deleteEmployee: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/employees/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete employee');
    }
  },

 //------------------------------------------------------------------------- 
createAttendance: async (attendanceData) => {
    try {
      const response = await axios.post(`${API_URL}/attendance`, attendanceData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to create attendance record");
    }
  },
  getAttendance: async (date) => {
    try {
      const response = await axios.get(`${API_URL}/attendance${date ? `?date=${date}` : ""}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch attendance records");
    }
  },
//-------------------------------------------------------
// Event APIs
  getEvents: async () => {
    try {
      const response = await axios.get(`${API_URL}/events`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch events");
    }
  },
  createEvent: async (eventData) => {
    try {
      const response = await axios.post(`${API_URL}/events`, eventData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to create event");
    }
  },
  updateEvent: async (id, eventData) => {
    try {
      const response = await axios.put(`${API_URL}/events/${id}`, eventData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to update event");
    }
  },
  deleteEvent: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/events/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to delete event");
    }
  },
};

export default hrmApi;