import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Search, Filter, Download, Upload, Calendar, DollarSign, Package, Users, ArrowLeft, Menu } from 'lucide-react';
import QuotationForm from './QuotationForm';

// Mock data with more entries to simulate large dataset
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
  },
  {
    id: 3,
    quotationNumber: 'QUO-2025-003',
    customerName: 'PQR Solutions',
    customerAddress: '456 Tech Park, Bangalore, KA 560001',
    date: '2025-07-24',
    expiryDate: '2025-08-23',
    status: 'accepted',
    total: 22000.00,
    tax: 4000.00,
    subtotal: 18000.00,
    items: [
      { id: 1, name: 'Product D', quantity: 20, price: 900, total: 18000 }
    ],
    paymentTerms: 'Net 45',
    authorizedBy: 'Emily Executive'
  },
  {
    id: 4,
    quotationNumber: 'QUO-2025-004',
    customerName: 'LMN Industries',
    customerAddress: '101 Industrial Ave, Chennai, TN 600001',
    date: '2025-07-23',
    expiryDate: '2025-08-22',
    status: 'expired',
    total: 12500.00,
    tax: 2000.00,
    subtotal: 10500.00,
    items: [
      { id: 1, name: 'Service E', quantity: 7, price: 1500, total: 10500 }
    ],
    paymentTerms: 'Net 30',
    authorizedBy: 'Michael Manager'
  },
  {
    id: 5,
    quotationNumber: 'QUO-2025-005',
    customerName: 'RST Technologies',
    customerAddress: '202 Tech Hub, Hyderabad, TS 500001',
    date: '2025-07-22',
    expiryDate: '2025-08-21',
    status: 'draft',
    total: 30000.00,
    tax: 5000.00,
    subtotal: 25000.00,
    items: [
      { id: 1, name: 'Product F', quantity: 25, price: 1000, total: 25000 }
    ],
    paymentTerms: 'Net 60',
    authorizedBy: 'Anna Director'
  }
];

const mockCustomers = [
  { id: 1, name: 'ABC Corporation', address: '123 Business St, Mumbai, MH 400001' },
  { id: 2, name: 'XYZ Enterprises', address: '789 Commerce Rd, Delhi, DL 110001' },
  { id: 3, name: 'PQR Solutions', address: '456 Tech Park, Bangalore, KA 560001' },
  { id: 4, name: 'LMN Industries', address: '101 Industrial Ave, Chennai, TN 600001' },
  { id: 5, name: 'RST Technologies', address: '202 Tech Hub, Hyderabad, TS 500001' }
];

// Mock QuotationForm component

function QuotationList() {
  const [quotations, setQuotations] = useState(mockQuotations);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list', 'create', 'edit', 'view'
  const [selectedQuotation, setSelectedQuotation] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredQuotations = quotations.filter(quotation => {
    const matchesSearch = 
      quotation.quotationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to List</span>
            </button>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Quotation Details
            </h1>
            <div className="w-20"></div> {/* Spacer for center alignment */}
          </div>

          {/* Quotation Details Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Basic Info Grid */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8">
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
                    Quotation Number
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 break-all">
                    {selectedQuotation.quotationNumber}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
                    Customer
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 break-words">
                    {selectedQuotation.customerName}
                  </p>
                </div>
                <div className="space-y-1 sm:col-span-2 xl:col-span-1">
                  <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
                    Customer Address
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 break-words">
                    {selectedQuotation.customerAddress}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
                    Date
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                    {new Date(selectedQuotation.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
                    Expiry Date
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                    {new Date(selectedQuotation.expiryDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
                    Status
                  </p>
                  <span className={`inline-flex px-3 py-1 text-xs sm:text-sm font-semibold rounded-full ${getStatusColor(selectedQuotation.status)}`}>
                    {selectedQuotation.status.charAt(0).toUpperCase() + selectedQuotation.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Items Section */}
              <div className="border-t pt-6 sm:pt-8">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Items</h2>
                
                {/* Desktop Table */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Item
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedQuotation.items.map(item => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {item.quantity}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            ₹{item.price.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            ₹{item.total.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="lg:hidden space-y-4">
                  {selectedQuotation.items.map(item => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium text-gray-900 text-sm sm:text-base break-words flex-1 mr-2">
                          {item.name}
                        </h3>
                        <span className="text-sm sm:text-base font-semibold text-gray-900 whitespace-nowrap">
                          ₹{item.total.toLocaleString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div>
                          <span className="text-gray-500">Quantity:</span>
                          <span className="ml-1 font-medium text-gray-900">{item.quantity}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Price:</span>
                          <span className="ml-1 font-medium text-gray-900">₹{item.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals Section */}
              <div className="border-t pt-6 sm:pt-8 mt-6 sm:mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl ml-auto">
                  <div className="flex justify-between sm:block">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
                      Subtotal
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                      ₹{selectedQuotation.subtotal.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-between sm:block">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
                      Tax
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                      ₹{selectedQuotation.tax.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-between sm:block border-t sm:border-t-0 pt-2 sm:pt-0">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide">
                      Total
                    </p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                      ₹{selectedQuotation.total.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Quotation Management
          </h1>
          <button
            onClick={handleCreateNew}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium shadow-sm w-full sm:w-auto"
          >
            <Plus className="w-5 h-5" />
            <span>Create Quotation</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                  <DollarSign className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Total Amount
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                  ₹{totalAmount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-yellow-100 p-2 sm:p-3 rounded-lg">
                  <Calendar className="text-yellow-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Draft Amount
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                  ₹{draftAmount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg">
                  <Package className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Total Quotations
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  {filteredQuotations.length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-purple-100 p-2 sm:p-3 rounded-lg">
                  <Users className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Active Customers
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  {mockCustomers.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-4 sm:p-6">
            {/* Mobile filter toggle */}
            <div className="sm:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <span className="font-medium text-gray-700">Filters & Search</span>
                <Menu className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Filter content */}
            <div className={`${showFilters ? 'block' : 'hidden'} sm:block`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Search */}
                <div className="flex items-center flex-1 min-w-0">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search quotations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Status Filter */}
                <div className="flex items-center min-w-0 sm:w-auto">
                  <div className="relative w-full sm:w-auto">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Filter className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="block w-full sm:w-auto pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base appearance-none bg-white"
                    >
                      <option value="all">All Status</option>
                      <option value="draft">Draft</option>
                      <option value="sent">Sent</option>
                      <option value="accepted">Accepted</option>
                      <option value="expired">Expired</option>
                    </select>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 sm:ml-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm sm:text-base transition-colors font-medium shadow-sm flex-1 sm:flex-none justify-center">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 sm:px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm sm:text-base transition-colors font-medium shadow-sm flex-1 sm:flex-none justify-center">
                    <Upload className="w-4 h-4" />
                    <span className="hidden sm:inline">Import</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quotation Table/Cards */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quotation #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expiry Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredQuotations.map((quotation) => (
                  <tr key={quotation.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {quotation.quotationNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="max-w-[200px] truncate" title={quotation.customerName}>
                        {quotation.customerName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(quotation.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(quotation.expiryDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
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
                          className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-100 transition-colors"
                          title="View"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleEdit(quotation)}
                          className="text-green-600 hover:text-green-900 p-1 rounded-full hover:bg-green-100 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(quotation.id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-100 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Cards */}
          <div className="lg:hidden divide-y divide-gray-200">
            {filteredQuotations.map((quotation) => (
              <div key={quotation.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-gray-900 truncate">
                      {quotation.quotationNumber}
                    </h3>
                    <p className="text-sm text-gray-500 truncate mt-1">
                      {quotation.customerName}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(quotation.status)}`}>
                      {quotation.status.charAt(0).toUpperCase() + quotation.status.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-500">Date:</span>
                    <span className="ml-1 font-medium text-gray-900">
                      {new Date(quotation.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Expiry:</span>
                    <span className="ml-1 font-medium text-gray-900">
                      {new Date(quotation.expiryDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    ₹{quotation.total.toLocaleString()}
                  </div>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => handleView(quotation)}
                      className="text-blue-600 hover:text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"
                      title="View"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleEdit(quotation)}
                      className="text-green-600 hover:text-green-900 p-2 rounded-full hover:bg-green-100 transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(quotation.id)}
                      className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-100 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredQuotations.length === 0 && (
            <div className="text-center py-12">
              <Package className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No quotations found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Get started by creating a new quotation.'
                }
              </p>
              {!searchTerm && statusFilter === 'all' && (
                <div className="mt-6">
                  <button
                    onClick={handleCreateNew}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Create Quotation
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuotationList;