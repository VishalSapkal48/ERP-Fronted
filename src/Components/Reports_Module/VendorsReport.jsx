import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Download, Truck } from 'lucide-react';

const VendorsReport = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  });
  const [vendorData, setVendorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockVendorData = [
    { vendor: 'Vendor A', orders: 50, onTime: 45, amount: 25000 },
    { vendor: 'Vendor B', orders: 40, onTime: 38, amount: 20000 },
    { vendor: 'Vendor C', orders: 30, onTime: 25, amount: 15000 },
    { vendor: 'Vendor D', orders: 60, onTime: 55, amount: 30000 }
  ];

  const paymentStatus = [
    { vendor: 'Vendor A', status: 'Paid', amount: 25000 },
    { vendor: 'Vendor C', status: 'Pending', amount: 15000 }
  ];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      try {
        setVendorData(mockVendorData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load vendor data');
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [dateRange]);

  const handleExport = (format) => {
    try {
      alert(`Vendors report exported as ${format} (mock data)`);
    } catch (err) {
      console.error(`Error exporting vendors report as ${format}:`, err);
      alert(`Failed to export vendors report as ${format}`);
    }
  };

  const totalOrders = vendorData.reduce((sum, item) => sum + item.orders, 0);
  const totalAmount = vendorData.reduce((sum, item) => sum + item.amount, 0);

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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Vendors Report</h1>
              <p className="text-gray-600">Vendor performance and payment status</p>
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
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900">{totalOrders}</p>
              </div>
              <Truck className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Amount</p>
                <p className="text-3xl font-bold text-gray-900">${totalAmount.toLocaleString()}</p>
              </div>
              <Truck className="w-12 h-12 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Vendor Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vendorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="vendor" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#3B82F6" />
              <Bar dataKey="onTime" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Status</h3>
          <div className="space-y-4">
            {paymentStatus.map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{payment.vendor}</p>
                  <p className="text-sm text-gray-600">Status: {payment.status}</p>
                </div>
                <p className="font-semibold text-gray-900">${payment.amount.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorsReport;