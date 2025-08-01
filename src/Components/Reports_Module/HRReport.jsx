import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Download, Users, Clock } from 'lucide-react';

const HRReport = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  });
  const [hrData, setHrData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockHrData = [
    { month: 'Jan', headcount: 200, turnover: 5, trainingHours: 100 },
    { month: 'Feb', headcount: 205, turnover: 4, trainingHours: 120 },
    { month: 'Mar', headcount: 210, turnover: 6, trainingHours: 90 },
    { month: 'Apr', headcount: 208, turnover: 3, trainingHours: 110 },
    { month: 'May', headcount: 215, turnover: 5, trainingHours: 130 },
    { month: 'Jun', headcount: 220, turnover: 4, trainingHours: 115 }
  ];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      try {
        setHrData(mockHrData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load HR data');
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [dateRange]);

  const handleExport = (format) => {
    try {
      alert(`HR report exported as ${format} (mock data)`);
    } catch (err) {
      console.error(`Error exporting HR report as ${format}:`, err);
      alert(`Failed to export HR report as ${format}`);
    }
  };

  const totalHeadcount = hrData[hrData.length - 1]?.headcount || 0;
  const averageTurnover = hrData.reduce((sum, item) => sum + item.turnover, 0) / (hrData.length || 1);
  const totalTrainingHours = hrData.reduce((sum, item) => sum + item.trainingHours, 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen ">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">HR Report</h1>
              <p className="text-gray-600">Employee metrics and workforce analytics</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={dateRange.startDate}
                  onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
                  className="border rounded-md px-3 py-2"
                />
                <span className="text-gray-400">to</span>
                <input
                  type="date"
                  value={dateRange.endDate}
                  onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
                  className="border rounded-md px-3 py-2"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleExport('PDF')}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  <Download className="w-4 h-4" />
                  Export PDF
                </button>
                <button
                  onClick={() => handleExport('Excel')}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  <Download className="w-4 h-4" />
                  Export Excel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Headcount</p>
                <p className="text-3xl font-bold text-gray-900">{totalHeadcount}</p>
              </div>
              <Users className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Turnover Rate</p>
                <p className="text-3xl font-bold text-gray-900">{averageTurnover.toFixed(1)}%</p>
              </div>
              <Users className="w-12 h-12 text-red-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Training Hours</p>
                <p className="text-3xl font-bold text-gray-900">{totalTrainingHours}</p>
              </div>
              <Clock className="w-12 h-12 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Workforce Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={hrData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="headcount" stackId="1" stroke="#3B82F6" fill="#3B82F6" />
              <Area type="monotone" dataKey="trainingHours" stackId="1" stroke="#10B981" fill="#10B981" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HRReport;