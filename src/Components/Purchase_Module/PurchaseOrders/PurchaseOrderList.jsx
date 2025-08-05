import React, { useState, useEffect } from 'react';
import { Search, Filter, Eye, Calendar, DollarSign, User, Package, ChevronRight, Plus, X, Building, Trash2 } from 'lucide-react';

function PurchaseOrderList() {
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    accountType: 'Projects',
    vendor: '',
    billingType: 'Project Wise',
    warehouse: 'Select Warehouse',
    category: 'Select Category',
    purchaseDate: '',
    purchaseOrderNumber: '',
    freightCharges: 0,
    items: [{ id: Date.now(), itemType: 'Select Items', items: '', quantity: 0, price: 0, taxPercent: 0, discount: 0, total: 0 }],
    subTotal: 0,
    discountTotal: 0,
    taxTotal: 0,
    totalAmount: 0
  });

  // Mock suppliers for dropdown
  const suppliers = [
    { id: 1, name: 'Tech Solutions Inc' },
    { id: 2, name: 'Global Supply Co' },
    { id: 3, name: 'Industrial Parts Ltd' },
    { id: 4, name: 'Office Supplies Pro' },
    { id: 5, name: 'Equipment Rental Co' },
    { id: 6, name: 'Green Energy Solutions' }
  ];

  useEffect(() => {
    const fetchPurchaseOrders = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockData = [
          { 
            id: 'PO001', 
            supplierName: 'Tech Solutions Inc', 
            totalAmount: 583, 
            date: '2025-07-20',
            status: 'Pending',
            items: 3,
            paymentTerms: 'Net 30'
          },
          { 
            id: 'PO002', 
            supplierName: 'Global Supply Co', 
            totalAmount: 1200, 
            date: '2025-07-22',
            status: 'Approved',
            items: 5,
            paymentTerms: 'Net 15'
          },
          { 
            id: 'PO003', 
            supplierName: 'Industrial Parts Ltd', 
            totalAmount: 750, 
            date: '2025-07-24',
            status: 'Delivered',
            items: 2,
            paymentTerms: 'Net 30'
          },
          { 
            id: 'PO004', 
            supplierName: 'Office Supplies Pro', 
            totalAmount: 1500, 
            date: '2025-07-25',
            status: 'Processing',
            items: 8,
            paymentTerms: 'Net 45'
          },
          { 
            id: 'PO005', 
            supplierName: 'Equipment Rental Co', 
            totalAmount: 320, 
            date: '2025-07-26',
            status: 'Pending',
            items: 1,
            paymentTerms: 'Net 30'
          }
        ];
        setPurchaseOrders(mockData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPurchaseOrders();
  }, []);

  const filteredOrders = purchaseOrders.filter(order => {
    const matchesSearch = 
      order.supplierName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'high') return order.totalAmount > 1000 && matchesSearch;
    if (filter === 'low') return order.totalAmount <= 1000 && matchesSearch;
    if (filter === 'pending') return order.status === 'Pending' && matchesSearch;
    if (filter === 'approved') return order.status === 'Approved' && matchesSearch;
    return matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Delivered': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = (order) => {
    alert(`Viewing details for ${order.id}\nSupplier: ${order.supplierName}\nAmount: $${order.totalAmount.toLocaleString()}\nDate: ${order.date}\nStatus: ${order.status}\nItems: ${order.items}\nPayment Terms: ${order.paymentTerms}`);
  };

  const handleCreateOrder = () => {
    setFormData({
      ...formData,
      purchaseOrderNumber: `PO${(purchaseOrders.length + 1).toString().padStart(3, '0')}`
    });
    setShowCreateModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
    setFormData({
      accountType: 'Projects',
      vendor: '',
      billingType: 'Project Wise',
      warehouse: 'Select Warehouse',
      category: 'Select Category',
      purchaseDate: '',
      purchaseOrderNumber: '',
      freightCharges: 0,
      items: [{ id: Date.now(), itemType: 'Select Items', items: '', quantity: 0, price: 0, taxPercent: 0, discount: 0, total: 0 }],
      subTotal: 0,
      discountTotal: 0,
      taxTotal: 0,
      totalAmount: 0
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updatedFormData = { ...prev, [name]: value };
      return calculateTotals(updatedFormData);
    });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updatedItems = [...prev.items];
      updatedItems[index] = { ...updatedItems[index], [name]: value };
      updatedItems[index].total = calculateItemTotal(updatedItems[index]);
      const updatedFormData = { ...prev, items: updatedItems };
      return calculateTotals(updatedFormData);
    });
  };

  const addItem = () => {
    setFormData(prev => {
      const updatedItems = [...prev.items, { id: Date.now(), itemType: 'Select Items', items: '', quantity: 0, price: 0, taxPercent: 0, discount: 0, total: 0 }];
      const updatedFormData = { ...prev, items: updatedItems };
      return calculateTotals(updatedFormData);
    });
  };

  const removeItem = (index) => {
    setFormData(prev => {
      const updatedItems = prev.items.filter((_, i) => i !== index);
      const updatedFormData = { ...prev, items: updatedItems };
      return calculateTotals(updatedFormData);
    });
  };

  const calculateItemTotal = (item) => {
    const quantity = parseFloat(item.quantity) || 0;
    const price = parseFloat(item.price) || 0;
    const taxPercent = parseFloat(item.taxPercent) || 0;
    const discount = parseFloat(item.discount) || 0;
    return ((quantity * price * (1 + taxPercent / 100)) - discount).toFixed(2);
  };

  const calculateTotals = (formData) => {
    const subTotal = formData.items.reduce((sum, item) => sum + (parseFloat(item.quantity) * parseFloat(item.price)), 0).toFixed(2);
    const taxTotal = formData.items.reduce((sum, item) => sum + (parseFloat(item.quantity) * parseFloat(item.price) * (parseFloat(item.taxPercent) / 100)), 0).toFixed(2);
    const discountTotal = formData.items.reduce((sum, item) => sum + parseFloat(item.discount), 0).toFixed(2);
    const freight = parseFloat(formData.freightCharges) || 0;
    const totalAmount = (parseFloat(subTotal) + parseFloat(taxTotal) + freight - parseFloat(discountTotal)).toFixed(2);
    return { ...formData, subTotal, taxTotal, discountTotal, totalAmount };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accountType || !formData.vendor || !formData.billingType || 
        !formData.warehouse || formData.warehouse === 'Select Warehouse' || 
        !formData.category || formData.category === 'Select Category' || 
        !formData.purchaseDate) {
      alert('Please fill in all required fields (Account Type, Vendor, Billing Type, Warehouse, Category, Purchase Date).');
      return;
    }

    const newOrder = {
      id: formData.purchaseOrderNumber,
      supplierName: formData.vendor,
      totalAmount: parseFloat(formData.totalAmount),
      date: formData.purchaseDate,
      status: 'Pending', // Default status
      items: formData.items.reduce((sum, item) => sum + parseInt(item.quantity), 0),
      paymentTerms: 'Net 30' // Default payment terms
    };

    setPurchaseOrders(prev => [...prev, newOrder]);
    alert('Purchase Order created successfully!');
    handleCloseModal();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-center">Loading purchase orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <p className="text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 transform transition-all hover:shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-600 p-3 rounded-full">
                <Package className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900">Purchase Orders</h1>
                <p className="text-gray-600 mt-1">Manage and track all purchase orders</p>
              </div>
            </div>
            <button
              onClick={handleCreateOrder}
              className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">Create PO</span>
            </button>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <p className="text-2xl font-bold text-gray-800">{purchaseOrders.length}</p>
              </div>
              <Package className="w-8 h-8 text-indigo-500" />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending Orders</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {purchaseOrders.filter(o => o.status === 'Pending').length}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Value</p>
                <p className="text-2xl font-bold text-green-600">
                  ${purchaseOrders.reduce((sum, order) => sum + order.totalAmount, 0).toLocaleString()}
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Suppliers</p>
                <p className="text-2xl font-bold text-purple-600">
                  {new Set(purchaseOrders.map(o => o.supplierName)).size}
                </p>
              </div>
              <User className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>
        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by supplier or PO number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <label className="text-sm font-medium text-gray-700">Filter:</label>
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              >
                <option value="all">All Orders</option>
                <option value="high">High Value (&gt;$1000)</option>
                <option value="low">Low Value (≤$1000)</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
              </select>
            </div>
          </div>
        </div>

        {/* Purchase Orders Grid */}
        <div className="grid gap-6">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center transform transition-all hover:shadow-2xl">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No purchase orders found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria.</p>
              <button
                onClick={handleCreateOrder}
                className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-md"
              >
                Create New PO
              </button>
            </div>
          ) : (
            filteredOrders.map(order => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-indigo-100 p-2 rounded-lg">
                        <Package className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">PO #{order.id}</h3>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <button
                        onClick={() => handleViewDetails(order)}
                        className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Supplier</p>
                        <p className="text-sm font-medium text-gray-800">{order.supplierName}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Total Amount</p>
                        <p className="text-sm font-bold text-green-600">${order.totalAmount.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Package className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Items</p>
                        <p className="text-sm font-medium text-gray-800">{order.items} items</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Payment Terms</p>
                        <p className="text-sm font-medium text-gray-800">{order.paymentTerms}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleViewDetails(order)}
                      className="flex items-center justify-between w-full text-left text-indigo-600 hover:text-indigo-800 transition-colors"
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


        {/* Create Purchase Order Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full max-h-[85vh] overflow-y-auto transform transition-all scale-95 animate-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Create New Purchase Order</h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Main Form Section */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <Building className="w-5 h-5 mr-2 text-indigo-600" />
                    Purchase Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Account Type *</label>
                      <select
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        required
                      >
                        <option value="Projects">Projects</option>
                        <option value="Operations">Operations</option>
                        <option value="Maintenance">Maintenance</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        Vendor *
                      </label>
                      <select
                        name="vendor"
                        value={formData.vendor}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        required
                      >
                        <option value="">Select Vendor</option>
                        {suppliers.map(supplier => (
                          <option key={supplier.id} value={supplier.name}>
                            {supplier.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Billing Type *</label>
                      <select
                        name="billingType"
                        value={formData.billingType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        required
                      >
                        <option value="Project Wise">Project Wise</option>
                        <option value="Monthly">Monthly</option>
                        <option value="One Time">One Time</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Warehouse *</label>
                      <select
                        name="warehouse"
                        value={formData.warehouse}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        required
                      >
                        <option value="Select Warehouse">Select Warehouse</option>
                        <option value="Main Warehouse">Main Warehouse</option>
                        <option value="Secondary Warehouse">Secondary Warehouse</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        required
                      >
                        <option value="Select Category">Select Category</option>
                        <option value="Office Supplies">Office Supplies</option>
                        <option value="Equipment">Equipment</option>
                        <option value="Raw Materials">Raw Materials</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Purchase Date *
                      </label>
                      <input
                        type="date"
                        name="purchaseDate"
                        value={formData.purchaseDate}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Purchase Number</label>
                      <input
                        type="text"
                        name="purchaseOrderNumber"
                        value={formData.purchaseOrderNumber}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Freight Charges ($)</label>
                      <input
                        type="number"
                        name="freightCharges"
                        value={formData.freightCharges}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Items Section */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                      <Package className="w-5 h-5 mr-2 text-indigo-600" />
                      Items
                    </h2>
                    <button
                      type="button"
                      onClick={addItem}
                      className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Item</span>
                    </button>
                  </div>
                  <div className="space-y-4">
                    {formData.items.map((item, index) => (
                      <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                          <div className="space-y-2">
                            <label className="block text-xs font-semibold text-gray-600">Item Type</label>
                            <select
                              name="itemType"
                              value={item.itemType}
                              onChange={(e) => handleItemChange(index, e)}
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            >
                              <option value="Select Items">Select Items</option>
                              <option value="Product">Product</option>
                              <option value="Service">Service</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-semibold text-gray-600">Items</label>
                            <input
                              type="text"
                              name="items"
                              value={item.items}
                              onChange={(e) => handleItemChange(index, e)}
                              placeholder="Item name"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-semibold text-gray-600">Quantity</label>
                            <input
                              type="number"
                              name="quantity"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, e)}
                              placeholder="0"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                              min="0"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-semibold text-gray-600">Price ($)</label>
                            <input
                              type="number"
                              name="price"
                              value={item.price}
                              onChange={(e) => handleItemChange(index, e)}
                              placeholder="0.00"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                              step="0.01"
                              min="0"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-semibold text-gray-600">Tax (%)</label>
                            <input
                              type="number"
                              name="taxPercent"
                              value={item.taxPercent}
                              onChange={(e) => handleItemChange(index, e)}
                              placeholder="0"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                              step="0.01"
                              min="0"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-semibold text-gray-600">Discount ($)</label>
                            <input
                              type="number"
                              name="discount"
                              value={item.discount}
                              onChange={(e) => handleItemChange(index, e)}
                              placeholder="0.00"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                              step="0.01"
                              min="0"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-semibold text-green-600">Total Amount</label>
                            <div className="flex items-center space-x-2">
                              <input
                                type="text"
                                name="total"
                                value={`$${item.total}`}
                                readOnly
                                className="w-full p-2 border border-gray-300 rounded-md bg-green-50 text-green-700 font-semibold text-sm"
                              />
                              {formData.items.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeItem(index)}
                                  className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Totals Section */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-end">
                    <div className="w-full max-w-md space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Sub Total:</span>
                          <span className="font-semibold text-gray-800">${formData.subTotal}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Discount:</span>
                          <span className="font-semibold text-red-600">-${formData.discountTotal}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Tax:</span>
                          <span className="font-semibold text-blue-600">${formData.taxTotal}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Freight:</span>
                          <span className="font-semibold text-gray-800">${formData.freightCharges}</span>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-800">Total Amount:</span>
                            <span className="text-xl font-bold text-green-600">${formData.totalAmount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 font-medium shadow-lg"
                    >
                      Create Purchase Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PurchaseOrderList;