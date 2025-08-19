import React, { useState, useEffect } from 'react';
import {
  Search, Filter, Eye, User, ChevronRight, Trash2, Edit, Plus,
  Mail, Phone, MapPin, Building, Globe, MoreVertical, Download,
  Users, TrendingUp, DollarSign, X
} from 'lucide-react';

function SupplierManagement() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [showActions, setShowActions] = useState({});
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newSupplier, setNewSupplier] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    website: '',
    contactPerson: '',
    businessType: '',
    paymentTerms: '',
    totalOrders: 0,
    totalValue: 0,
    lastOrderDate: '',
    status: 'Active',
    rating: 0
  });

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockSuppliers = [
          {
            id: 'SUP001',
            name: 'Tech Solutions Inc',
            email: 'contact@techsolutions.com',
            phone: '+1 (555) 123-4567',
            address: '123 Technology Drive, Silicon Valley, CA 94025',
            city: 'Silicon Valley',
            state: 'CA',
            country: 'United States',
            website: 'https://techsolutions.com',
            contactPerson: 'John Smith',
            businessType: 'Corporation',
            paymentTerms: 'Net 30',
            totalOrders: 15,
            totalValue: 125000,
            lastOrderDate: '2025-07-20',
            status: 'Active',
            rating: 4.8
          },
          {
            id: 'SUP002',
            name: 'Global Supply Co',
            email: 'info@globalsupply.com',
            phone: '+1 (555) 987-6543',
            address: '456 Supply Road, Industrial Park, CA 94028',
            city: 'Industrial Park',
            state: 'CA',
            country: 'United States',
            website: 'https://globalsupply.com',
            contactPerson: 'Sarah Johnson',
            businessType: 'LLC',
            paymentTerms: 'Net 15',
            totalOrders: 8,
            totalValue: 85000,
            lastOrderDate: '2025-07-18',
            status: 'Active',
            rating: 4.5
          },
          {
            id: 'SUP003',
            name: 'Office Supplies Pro',
            email: 'sales@officesupplies.com',
            phone: '+1 (555) 111-2222',
            address: '789 Office Boulevard, Business District, CA 94029',
            city: 'Business District',
            state: 'CA',
            country: 'United States',
            website: 'https://officesupplies.com',
            contactPerson: 'Mike Wilson',
            businessType: 'Corporation',
            paymentTerms: 'Net 30',
            totalOrders: 22,
            totalValue: 65000,
            lastOrderDate: '2025-07-25',
            status: 'Active',
            rating: 4.2
          },
          {
            id: 'SUP004',
            name: 'Industrial Parts Ltd',
            email: 'contact@industrialparts.com',
            phone: '+1 (555) 333-4444',
            address: '321 Industrial Way, Manufacturing Hub, CA 94030',
            city: 'Manufacturing Hub',
            state: 'CA',
            country: 'United States',
            website: 'https://industrialparts.com',
            contactPerson: 'Lisa Davis',
            businessType: 'Corporation',
            paymentTerms: 'Net 45',
            totalOrders: 5,
            totalValue: 45000,
            lastOrderDate: '2025-07-15',
            status: 'Inactive',
            rating: 3.9
          },
          {
            id: 'SUP005',
            name: 'Green Energy Solutions',
            email: 'info@greenenergy.com',
            phone: '+1 (555) 555-6666',
            address: '654 Renewable Street, Eco City, CA 94031',
            city: 'Eco City',
            state: 'CA',
            country: 'United States',
            website: 'https://greenenergy.com',
            contactPerson: 'David Green',
            businessType: 'LLC',
            paymentTerms: 'Net 30',
            totalOrders: 12,
            totalValue: 95000,
            lastOrderDate: '2025-07-22',
            status: 'Active',
            rating: 4.7
          }
        ];
        setSuppliers(mockSuppliers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSuppliers();
  }, []);

  const filteredAndSortedSuppliers = suppliers
    .filter(supplier => {
      const matchesSearch =
        supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.contactPerson.toLowerCase().includes(searchTerm.toLowerCase());
      if (filter === 'all') return matchesSearch;
      if (filter === 'active') return matchesSearch && supplier.status === 'Active';
      if (filter === 'inactive') return matchesSearch && supplier.status === 'Inactive';
      if (filter === 'high-value') return matchesSearch && supplier.totalValue > 80000;
      return matchesSearch;
    })
    .sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      return sortOrder === 'asc' ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
    });

  const getStatusColor = (status) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  };

  const getRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) stars.push('★');
    if (hasHalfStar) stars.push('☆');
    while (stars.length < 5) stars.push('☆');
    return stars.join('');
  };

  const handleViewDetails = (supplier) => {
    alert(`Viewing details for: ${supplier.name}\nID: ${supplier.id}\nContact: ${supplier.contactPerson}\nEmail: ${supplier.email}`);
  };

  const handleEditSupplier = (supplier) => {
    alert(`Edit functionality for: ${supplier.name}`);
  };

  const handleCreateSupplier = () => {
    setShowCreateModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
    setNewSupplier({
      id: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      country: '',
      website: '',
      contactPerson: '',
      businessType: '',
      paymentTerms: '',
      totalOrders: 0,
      totalValue: 0,
      lastOrderDate: '',
      status: 'Active',
      rating: 0
    });
  };

  const handleSubmitSupplier = (e) => {
    e.preventDefault();
    if (!newSupplier.name || !newSupplier.email || !newSupplier.contactPerson) {
      alert('Please fill in all required fields (Name, Email, Contact Person).');
      return;
    }
    const newId = `SUP${(suppliers.length + 1).toString().padStart(3, '0')}`;
    const supplierData = {
      ...newSupplier,
      id: newId,
      totalOrders: parseInt(newSupplier.totalOrders) || 0,
      totalValue: parseFloat(newSupplier.totalValue) || 0,
      rating: parseFloat(newSupplier.rating) || 0,
      lastOrderDate: newSupplier.lastOrderDate || new Date().toISOString().split('T')[0]
    };
    setSuppliers(prev => [...prev, supplierData]);
    alert('Supplier added successfully!');
    handleCloseModal();
  };

  const handleDeleteSupplier = (supplierId) => {
    if (window.confirm('Are you sure you want to delete this supplier? This action cannot be undone.')) {
      setSuppliers(prev => prev.filter(s => s.id !== supplierId));
      alert('Supplier deleted successfully!');
    }
  };

  const handleBulkDelete = () => {
    if (selectedSuppliers.length === 0) return;
    if (window.confirm(`Are you sure you want to delete ${selectedSuppliers.length} supplier(s)?`)) {
      setSuppliers(prev => prev.filter(s => !selectedSuppliers.includes(s.id)));
      setSelectedSuppliers([]);
      alert('Selected suppliers deleted successfully!');
    }
  };

  const handleSelectSupplier = (supplierId) => {
    setSelectedSuppliers(prev =>
      prev.includes(supplierId)
        ? prev.filter(id => id !== supplierId)
        : [...prev, supplierId]
    );
  };

  const handleSelectAll = () => {
    if (selectedSuppliers.length === filteredAndSortedSuppliers.length) {
      setSelectedSuppliers([]);
    } else {
      setSelectedSuppliers(filteredAndSortedSuppliers.map(s => s.id));
    }
  };

  const toggleActions = (supplierId) => {
    setShowActions(prev => ({
      ...prev,
      [supplierId]: !prev[supplierId]
    }));
  };

  const exportSuppliers = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + "ID,Name,Email,Phone,Contact Person,City,State,Status,Total Orders,Total Value,Rating\n"
      + suppliers.map(s =>
        `${s.id},${s.name},${s.email},${s.phone},${s.contactPerson},${s.city},${s.state},${s.status},${s.totalOrders},${s.totalValue},${s.rating}`
      ).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "suppliers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-center text-sm sm:text-base">Loading suppliers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
          <div className="text-red-500 text-lg sm:text-xl mb-4">⚠️</div>
          <p className="text-red-600 text-sm sm:text-base">Error: {error}</p>
        </div>
      </div>
    );
  }

  const totalSuppliers = suppliers.length;
  const activeSuppliers = suppliers.filter(s => s.status === 'Active').length;
  const totalValue = suppliers.reduce((sum, s) => sum + s.totalValue, 0);
  const avgRating = suppliers.length > 0 ? suppliers.reduce((sum, s) => sum + s.rating, 0) / suppliers.length : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6">
      <div className="max-w-full sm:max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-500 p-2 sm:p-3 rounded-lg">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-gray-800">Suppliers</h1>
                <p className="text-gray-500 text-sm sm:text-base">Manage and track all your suppliers</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {selectedSuppliers.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-gray-600">
                    {selectedSuppliers.length} selected
                  </span>
                  <button
                    onClick={handleBulkDelete}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xs sm:text-sm"
                  >
                    Delete Selected
                  </button>
                </div>
              )}
              <button
                onClick={exportSuppliers}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Export</span>
              </button>
              <button
                onClick={handleCreateSupplier}
                className="px-4 py-1 sm:px-6 sm:py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Add Supplier</span>
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Total Suppliers</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">{totalSuppliers}</p>
              </div>
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Active Suppliers</p>
                <p className="text-lg sm:text-2xl font-bold text-green-600">{activeSuppliers}</p>
              </div>
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Total Value</p>
                <p className="text-lg sm:text-2xl font-bold text-blue-600">${totalValue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Avg Rating</p>
                <p className="text-lg sm:text-2xl font-bold text-yellow-600">{avgRating.toFixed(1)}</p>
              </div>
              <div className="text-yellow-500 text-base sm:text-lg">★</div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            {/* Search */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search suppliers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              {/* Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                >
                  <option value="all">All Suppliers</option>
                  <option value="active">Active Only</option>
                  <option value="inactive">Inactive Only</option>
                  <option value="high-value">High Value ($80K+)</option>
                </select>
              </div>
              {/* Sort */}
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [field, order] = e.target.value.split('-');
                  setSortBy(field);
                  setSortOrder(order);
                }}
                className="w-full sm:w-auto px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
              >
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="totalValue-desc">Value High-Low</option>
                <option value="totalValue-asc">Value Low-High</option>
                <option value="rating-desc">Rating High-Low</option>
                <option value="lastOrderDate-desc">Recent Orders</option>
              </select>
              {/* Select All Checkbox */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedSuppliers.length === filteredAndSortedSuppliers.length && filteredAndSortedSuppliers.length > 0}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-xs sm:text-sm text-gray-600">Select All</span>
              </label>
            </div>
          </div>
        </div>

        {/* Suppliers Grid */}
        <div className="grid gap-4 sm:gap-6">
          {filteredAndSortedSuppliers.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center">
              <Users className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No suppliers found</h3>
              <p className="text-gray-500 text-sm sm:text-base mb-4">Try adjusting your search or filter criteria.</p>
              <button
                onClick={handleCreateSupplier}
                className="px-4 sm:px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors text-sm sm:text-base"
              >
                Add Your First Supplier
              </button>
            </div>
          ) : (
            filteredAndSortedSuppliers.map(supplier => (
              <div
                key={supplier.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  selectedSuppliers.includes(supplier.id) ? 'ring-2 ring-indigo-500' : ''
                }`}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedSuppliers.includes(supplier.id)}
                        onChange={() => handleSelectSupplier(supplier.id)}
                        className="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <div className="bg-indigo-100 p-2 sm:p-3 rounded-lg">
                        <Building className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                          <h3 className="text-base sm:text-xl font-semibold text-gray-800 truncate">{supplier.name}</h3>
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(supplier.status)}`}>
                            {supplier.status}
                          </span>
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500 text-xs sm:text-sm">{getRatingStars(supplier.rating)}</span>
                            <span className="text-xs sm:text-sm text-gray-600">({supplier.rating})</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 truncate">Contact: {supplier.contactPerson}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                          <div className="flex items-center space-x-1 truncate">
                            <Mail className="w-4 h-4" />
                            <span className="truncate">{supplier.email}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Phone className="w-4 h-4" />
                            <span>{supplier.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleViewDetails(supplier)}
                        className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button
                        onClick={() => handleEditSupplier(supplier)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <div className="relative">
                        <button
                          onClick={() => toggleActions(supplier.id)}
                          className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        {showActions[supplier.id] && (
                          <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            <button
                              onClick={() => {
                                handleDeleteSupplier(supplier.id);
                                setShowActions(prev => ({ ...prev, [supplier.id]: false }));
                              }}
                              className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors flex items-center space-x-2 text-sm"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span>Delete</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="text-sm font-medium text-gray-800 truncate">{supplier.city}, {supplier.state}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Total Value</p>
                        <p className="text-sm font-bold text-green-600">${supplier.totalValue.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Orders</p>
                        <p className="text-sm font-medium text-gray-800">{supplier.totalOrders}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Last Order</p>
                        <p className="text-sm font-medium text-gray-800">{supplier.lastOrderDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-100 gap-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                      <span>Business: {supplier.businessType}</span>
                      <span>Terms: {supplier.paymentTerms}</span>
                      {supplier.website && (
                        <a
                          href={supplier.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
                        >
                          <Globe className="w-4 h-4" />
                          <span>Website</span>
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => handleViewDetails(supplier)}
                      className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <span className="text-sm font-medium">View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Info */}
        {filteredAndSortedSuppliers.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-600">
                Showing {filteredAndSortedSuppliers.length} of {totalSuppliers} suppliers
              </p>
              <div className="text-xs sm:text-sm text-gray-600">
                {selectedSuppliers.length > 0 && (
                  <span>{selectedSuppliers.length} selected</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Create Supplier Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-xl sm:max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Create New Supplier</h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <form onSubmit={handleSubmitSupplier} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={newSupplier.name}
                      onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      value={newSupplier.email}
                      onChange={(e) => setNewSupplier({ ...newSupplier, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Contact Person <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={newSupplier.contactPerson}
                      onChange={(e) => setNewSupplier({ ...newSupplier, contactPerson: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="text"
                      value={newSupplier.phone}
                      onChange={(e) => setNewSupplier({ ...newSupplier, phone: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      value={newSupplier.address}
                      onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      placeholder="123 Business Street"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      value={newSupplier.city}
                      onChange={(e) => setNewSupplier({ ...newSupplier, city: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      placeholder="San Francisco"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">State</label>
                    <input
                      type="text"
                      value={newSupplier.state}
                      onChange={(e) => setNewSupplier({ ...newSupplier, state: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      placeholder="CA"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Country</label>
                    <input
                      type="text"
                      value={newSupplier.country}
                      onChange={(e) => setNewSupplier({ ...newSupplier, country: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Website</label>
                    <input
                      type="url"
                      value={newSupplier.website}
                      onChange={(e) => setNewSupplier({ ...newSupplier, website: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      placeholder="https://example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Business Type</label>
                    <select
                      value={newSupplier.businessType}
                      onChange={(e) => setNewSupplier({ ...newSupplier, businessType: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                    >
                      <option value="">Select Business Type</option>
                      <option value="Corporation">Corporation</option>
                      <option value="LLC">LLC</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Sole Proprietorship">Sole Proprietorship</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Payment Terms</label>
                    <select
                      value={newSupplier.paymentTerms}
                      onChange={(e) => setNewSupplier({ ...newSupplier, paymentTerms: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                    >
                      <option value="">Select Payment Terms</option>
                      <option value="Net 15">Net 15</option>
                      <option value="Net 30">Net 30</option>
                      <option value="Net 45">Net 45</option>
                      <option value="Net 60">Net 60</option>
                      <option value="Due on Receipt">Due on Receipt</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      value={newSupplier.status}
                      onChange={(e) => setNewSupplier({ ...newSupplier, status: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Total Orders</label>
                    <input
                      type="number"
                      min="0"
                      value={newSupplier.totalOrders}
                      onChange={(e) => setNewSupplier({ ...newSupplier, totalOrders: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Total Value ($)</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={newSupplier.totalValue}
                      onChange={(e) => setNewSupplier({ ...newSupplier, totalValue: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Rating (0-5)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      value={newSupplier.rating}
                      onChange={(e) => setNewSupplier({ ...newSupplier, rating: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                      placeholder="0.0"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Last Order Date</label>
                    <input
                      type="date"
                      value={newSupplier.lastOrderDate}
                      onChange={(e) => setNewSupplier({ ...newSupplier, lastOrderDate: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-4 mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 sm:px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base"
                  >
                    Add Supplier
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SupplierManagement;