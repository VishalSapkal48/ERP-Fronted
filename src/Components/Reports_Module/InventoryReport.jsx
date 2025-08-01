import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Download, AlertTriangle, Package } from 'lucide-react';

const InventoryReport = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  });
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockInventoryData = [
    { product: 'Product A', stock: 500, turnover: 2.5 },
    { product: 'Product B', stock: 300, turnover: 3.0 },
    { product: 'Product C', stock: 150, turnover: 1.8 },
    { product: 'Product D', stock: 400, turnover: 2.2 },
    { product: 'Product E', stock: 200, turnover: 2.8 }
  ];

  const lowStockAlerts = [
    { product: 'Product C', stock: 150, threshold: 200 },
    { product: 'Product E', stock: 200, threshold: 250 }
  ];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      try {
        setInventoryData(mockInventoryData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load inventory data');
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [dateRange]);

  const handleExport = (format) => {
    try {
      alert(`Inventory report exported as ${format} (mock data)`);
    } catch (err) {
      console.error(`Error exporting inventory report as ${format}:`, err);
      alert(`Failed to export inventory report as ${format}`);
    }
  };

  const totalStock = inventoryData.reduce((sum, item) => sum + item.stock, 0);
  const averageTurnover = inventoryData.reduce((sum, item) => sum + item.turnover, 0) / (inventoryData.length || 1);

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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory Report</h1>
              <p className="text-gray-600">Stock levels and turnover analysis</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Stock</p>
                <p className="text-3xl font-bold text-gray-900">{totalStock.toLocaleString()}</p>
              </div>
              <Package className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Turnover Rate</p>
                <p className="text-3xl font-bold text-gray-900">{averageTurnover.toFixed(2)}</p>
              </div>
              <Package className="w-12 h-12 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Stock Levels</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stock" fill="#3B82F6" />
              <Bar dataKey="turnover" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Low Stock Alerts</h3>
          <div className="space-y-4">
            {lowStockAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">{alert.product}</p>
                    <p className="text-sm text-gray-600">Stock: {alert.stock} (Threshold: {alert.threshold})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryReport;