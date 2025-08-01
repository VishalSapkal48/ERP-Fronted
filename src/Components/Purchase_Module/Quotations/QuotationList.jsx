import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Search, Filter, Download, Upload, Calendar, DollarSign, Package, Users } from 'lucide-react';
import QuotationForm from './QuotationForm';

// Mock data
const mockQuotations = [
  {
    id: 1,
    quotationNumber: 'QUO-2025-001',
    customerName: 'ABC Corporation',
    customerAddress: '123 Business St, Mumbai, MH 400001',
    date: '2025-07-26',
    expiryDate: '2025-08-25',
    status: 'draft',
    total: 15750.00,
    tax: 2250.00,
    subtotal: 13500.00,
    items: [
      { id: 1, name: 'Product A', quantity: 10, price: 500, total: 5000 },
      { id: 2, name: 'Service B', quantity: 5, price: 1700, total: 8500 }
    ],
    paymentTerms: 'Net 30',
    authorizedBy: 'John Manager'
  },
  {
    id: 2,
    quotationNumber: 'QUO-2025-002',
    customerName: 'XYZ Enterprises',
    customerAddress: '789 Commerce Rd, Delhi, DL 110001',
    date: '2025-07-25',
    expiryDate: '2025-08-24',
    status: 'sent',
    total: 8850.00,
    tax: 1350.00,
    subtotal: 7500.00,
    items: [
      { id: 1, name: 'Product C', quantity: 15, price: 500, total: 7500 }
    ],
    paymentTerms: 'Net 15',
    authorizedBy: 'Sarah Director'
  }
];

const mockCustomers = [
  { id: 1, name: 'ABC Corporation', address: '123 Business St, Mumbai, MH 400001' },
  { id: 2, name: 'XYZ Enterprises', address: '789 Commerce Rd, Delhi, DL 110001' },
  { id: 3, name: 'PQR Solutions', address: '456 Tech Park, Bangalore, KA 560001' }
];

function QuotationList() {
  const [quotations, setQuotations] = useState(mockQuotations);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list', 'create', 'edit', 'view'
  const [selectedQuotation, setSelectedQuotation] = useState(null);

  const filteredQuotations = quotations.filter(quotation => {
    const matchesSearch = quotation.quotationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quotation.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || quotation.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'sent': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalAmount = filteredQuotations.reduce((sum, quotation) => sum + quotation.total, 0);
  const draftAmount = filteredQuotations.filter(quo => quo.status === 'draft').reduce((sum, quotation) => sum + quotation.total, 0);

  const handleCreateNew = () => {
    setViewMode('create');
    setSelectedQuotation(null);
  };

  const handleEdit = (quotation) => {
    setViewMode('edit');
    setSelectedQuotation(quotation);
  };

  const handleView = (quotation) => {
    setViewMode('view');
    setSelectedQuotation(quotation);
  };

  const handleSave = (formData) => {
    if (viewMode === 'create') {
      setQuotations(prev => [...prev, formData]);
    } else if (viewMode === 'edit') {
      setQuotations(prev => prev.map(quo => quo.id === formData.id ? formData : quo));
    }
    setViewMode('list');
    setSelectedQuotation(null);
  };

  const handleCancel = () => {
    setViewMode('list');
    setSelectedQuotation(null);
  };

  const handleDelete = (id) => {
    setQuotations(prev => prev.filter(quo => quo.id !== id));
  };

  if (viewMode === 'create' || viewMode === 'edit') {
    return <QuotationForm onSave={handleSave} onCancel={handleCancel} initialData={selectedQuotation} />;
  }

  if (viewMode === 'view' && selectedQuotation) {
    return (
      <div className="ml-64 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Quotation Details</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600">Quotation Number</p>
              <p className="text-lg font-semibold">{selectedQuotation.quotationNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Customer</p>
              <p className="text-lg font-semibold">{selectedQuotation.customerName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Customer Address</p>
              <p className="text-lg font-semibold">{selectedQuotation.customerAddress}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date</p>
              <p className="text-lg font-semibold">{new Date(selectedQuotation.date).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Expiry Date</p>
              <p className="text-lg font-semibold">{new Date(selectedQuotation.expiryDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedQuotation.status)}`}>
                {selectedQuotation.status.charAt(0).toUpperCase() + selectedQuotation.status.slice(1)}
              </span>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">Items</h2>
            <table className="w-full mt-2">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedQuotation.items.map(item => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{item.price.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{item.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-lg font-semibold">₹{selectedQuotation.subtotal.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tax</p>
              <p className="text-lg font-semibold">₹{selectedQuotation.tax.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-lg font-semibold">₹{selectedQuotation.total.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleCancel}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              Back to List
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Quotation Management</h1>
          <button
            onClick={handleCreateNew}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus size={20} />
            Create Quotation
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <DollarSign className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-xl font-semibold">₹{totalAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Calendar className="text-yellow-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Draft Amount</p>
                <p className="text-xl font-semibold">₹{draftAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Package className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Quotations</p>
                <p className="text-xl font-semibold">{filteredQuotations.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Customers</p>
                <p className="text-xl font-semibold">{mockCustomers.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search quotations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="accepted">Accepted</option>
                <option value="expired">Expired</option>
              </select>
            </div>
            <div className="flex gap-2 ml-auto">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2">
                <Download size={16} />
                Export
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2">
                <Upload size={16} />
                Import
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quotation Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quotation #</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredQuotations.map((quotation) => (
                <tr key={quotation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {quotation.quotationNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {quotation.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(quotation.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(quotation.expiryDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    ₹{quotation.total.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(quotation.status)}`}>
                      {quotation.status.charAt(0).toUpperCase() + quotation.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleView(quotation)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(quotation)}
                        className="text-green-600 hover:text-green-900"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(quotation.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default QuotationList;