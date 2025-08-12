import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  DollarSign, 
  Package, 
  TrendingUp, 
  Users, 
  Calendar,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  AlertTriangle
} from 'lucide-react';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data for purchases
  const [purchases, setPurchases] = useState([
    {
      id: 'PO-001',
      vendor: 'Tech Solutions Inc.',
      amount: 15420.50,
      status: 'pending',
      date: '2025-08-10',
      items: 12,
      category: 'Electronics'
    },
    {
      id: 'PO-002',
      vendor: 'Office Supplies Co.',
      amount: 3240.75,
      status: 'approved',
      date: '2025-08-09',
      items: 8,
      category: 'Office Supplies'
    },
    {
      id: 'PO-003',
      vendor: 'Industrial Parts Ltd.',
      amount: 28750.00,
      status: 'completed',
      date: '2025-08-08',
      items: 25,
      category: 'Industrial'
    },
    {
      id: 'PO-004',
      vendor: 'Software Licensing Inc.',
      amount: 9850.00,
      status: 'rejected',
      date: '2025-08-07',
      items: 3,
      category: 'Software'
    },
    {
      id: 'PO-005',
      vendor: 'Furniture World',
      amount: 12300.25,
      status: 'pending',
      date: '2025-08-06',
      items: 15,
      category: 'Furniture'
    }
  ]);

  // Dashboard statistics
  const stats = {
    totalPurchases: purchases.length,
    totalAmount: purchases.reduce((sum, p) => sum + p.amount, 0),
    pendingOrders: purchases.filter(p => p.status === 'pending').length,
    completedOrders: purchases.filter(p => p.status === 'completed').length
  };

  // Filter purchases based on search and status
  const filteredPurchases = purchases.filter(purchase => {
    const matchesSearch = purchase.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         purchase.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || purchase.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const StatCard = ({ title, value, icon: Icon, color, change }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{borderLeftColor: color}}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className="text-sm text-green-600 flex items-center mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              {change}
            </p>
          )}
        </div>
        <div className="p-3 rounded-full" style={{backgroundColor: color + '20'}}>
          <Icon className="w-6 h-6" style={{color: color}} />
        </div>
      </div>
    </div>
  );

  const PurchaseRow = ({ purchase }) => (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {purchase.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {purchase.vendor}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ${purchase.amount.toLocaleString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(purchase.status)}`}>
          {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {purchase.date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {purchase.items}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:text-blue-800">
            <Eye className="w-4 h-4" />
          </button>
          <button className="text-green-600 hover:text-green-800">
            <Edit className="w-4 h-4" />
          </button>
          <button className="text-red-600 hover:text-red-800">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* <div>
              <h1 className="text-2xl font-bold text-gray-900">Purchase Management Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">Manage and track all your purchase orders</p>
            </div> */}
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                New Purchase Order
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview' },
              { id: 'purchases', name: 'Purchase Orders' },
              { id: 'vendors', name: 'Vendors' },
              { id: 'reports', name: 'Reports' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Purchase Orders"
                value={stats.totalPurchases}
                icon={ShoppingCart}
                color="#3B82F6"
                change="+12% from last month"
              />
              <StatCard
                title="Total Amount"
                value={`$${stats.totalAmount.toLocaleString()}`}
                icon={DollarSign}
                color="#10B981"
                change="+8% from last month"
              />
              <StatCard
                title="Pending Orders"
                value={stats.pendingOrders}
                icon={Package}
                color="#F59E0B"
              />
              <StatCard
                title="Completed Orders"
                value={stats.completedOrders}
                icon={TrendingUp}
                color="#6366F1"
                change="+15% from last month"
              />
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Purchase Orders */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Purchase Orders</h3>
                <div className="space-y-4">
                  {purchases.slice(0, 3).map((purchase) => (
                    <div key={purchase.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{purchase.id}</p>
                        <p className="text-sm text-gray-600">{purchase.vendor}</p>
                        <p className="text-sm text-gray-500">{purchase.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">${purchase.amount.toLocaleString()}</p>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(purchase.status)}`}>
                          {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center">
                    <Plus className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-sm font-medium">Create Purchase Order</span>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center">
                    <Users className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-sm font-medium">Add New Vendor</span>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center">
                    <Calendar className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-sm font-medium">Schedule Report</span>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mr-3" />
                    <span className="text-sm font-medium">Review Pending Orders</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Purchase Orders Tab */}
        {activeTab === 'purchases' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by PO ID or vendor..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="completed">Completed</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Purchase Orders Table */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PO ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vendor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Items
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPurchases.map((purchase) => (
                    <PurchaseRow key={purchase.id} purchase={purchase} />
                  ))}
                </tbody>
              </table>
              {filteredPurchases.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No purchase orders found.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Other tabs placeholder */}
        {activeTab === 'vendors' && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Vendors Management</h3>
            <p className="text-gray-600">Vendor management functionality will be implemented here.</p>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Reports & Analytics</h3>
            <p className="text-gray-600">Detailed reports and analytics will be available here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;