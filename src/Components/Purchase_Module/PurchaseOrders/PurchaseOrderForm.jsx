import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plus, Trash2, Package, Calendar, User, Building, ArrowLeft } from 'lucide-react';

function CreatePurchaseForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [suppliers, setSuppliers] = useState([]);
  const [formData, setFormData] = useState({
    id: id || `PO${Date.now()}`,
    purchaseOrderNumber: id ? '' : `PO-2025-${Math.floor(1000 + Math.random() * 9000)}`,
    accountType: 'Projects',
    vendor: '',
    billingType: 'Project Wise',
    warehouse: 'Select Warehouse',
    category: 'Select Category',
    purchaseDate: new Date().toISOString().split('T')[0],
    items: [
      {
        id: 1,
        itemType: 'Select Items',
        items: '',
        quantity: '',
        price: '',
        taxPercent: '',
        discount: '',
        total: '0.00',
      },
    ],
    subTotal: '0.00',
    discountTotal: '0.00',
    taxTotal: '0.00',
    totalAmount: '0.00',
    freightCharges: '0.00',
    status: 'Pending',
    createdDate: new Date().toISOString().split('T')[0],
    expectedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    supplierName: '',
    supplierEmail: '',
    supplierPhone: '',
    supplierAddress: '',
    billingAddress: '456 Business Boulevard, Corporate City, CA 94026',
    shippingAddress: '789 Warehouse Lane, Distribution Center, CA 94027',
    paymentTerms: 'Net 30',
    currency: 'USD',
    authorizedSignature: 'John Doe - Procurement Manager',
    notes: '',
    amendmentHistory: [],
    deliverySchedules: [],
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Load suppliers from localStorage
    const suppliers = JSON.parse(localStorage.getItem('suppliers') || '[]');
    setSuppliers(suppliers);

    // Load existing purchase order for editing
    if (id) {
      const orders = JSON.parse(localStorage.getItem('purchaseOrders') || '[]');
      const order = orders.find(o => o.id === id);
      if (order) {
        setFormData({
          ...order,
          items: order.items.map((item, index) => ({
            ...item,
            id: item.id || index + 1,
            itemType: 'Select Items',
            items: item.product,
            total: item.total.toString(),
          })),
          vendor: order.supplierName,
        });
      } else {
        setError('Purchase order not found');
      }
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'vendor') {
      const selectedSupplier = suppliers.find(s => s.name === value);
      setFormData(prev => ({
        ...prev,
        vendor: value,
        supplierName: value,
        supplierEmail: selectedSupplier ? selectedSupplier.email : '',
        supplierPhone: selectedSupplier ? selectedSupplier.phone : '',
        supplierAddress: selectedSupplier ? selectedSupplier.address : '',
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newItems = [...prev.items];
      newItems[index] = { ...newItems[index], [name]: value };

      // Calculate item total
      const quantity = parseFloat(newItems[index].quantity) || 0;
      const price = parseFloat(newItems[index].price) || 0;
      const taxPercent = parseFloat(newItems[index].taxPercent) || 0;
      const discount = parseFloat(newItems[index].discount) || 0;
      const itemTotal = quantity * price;
      const taxAmount = itemTotal * (taxPercent / 100);
      newItems[index].total = (itemTotal + taxAmount - discount).toFixed(2);

      // Calculate overall totals
      const subTotal = newItems.reduce((sum, item) => sum + (parseFloat(item.quantity) || 0) * (parseFloat(item.price) || 0), 0);
      const discountTotal = newItems.reduce((sum, item) => sum + (parseFloat(item.discount) || 0), 0);
      const taxTotal = newItems.reduce((sum, item) => sum + (parseFloat(item.quantity) || 0) * (parseFloat(item.price) || 0) * (parseFloat(item.taxPercent) / 100 || 0), 0);
      const totalAmount = subTotal + taxTotal - discountTotal + (parseFloat(prev.freightCharges) || 0);

      return {
        ...prev,
        items: newItems,
        subTotal: subTotal.toFixed(2),
        discountTotal: discountTotal.toFixed(2),
        taxTotal: taxTotal.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
      };
    });
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: prev.items.length + 1,
          itemType: 'Select Items',
          items: '',
          quantity: '',
          price: '',
          taxPercent: '',
          discount: '',
          total: '0.00',
        },
      ],
    }));
  };

  const removeItem = (index) => {
    if (formData.items.length > 1) {
      setFormData(prev => {
        const newItems = prev.items.filter((_, i) => i !== index);
        // Recalculate totals
        const subTotal = newItems.reduce((sum, item) => sum + (parseFloat(item.quantity) || 0) * (parseFloat(item.price) || 0), 0);
        const discountTotal = newItems.reduce((sum, item) => sum + (parseFloat(item.discount) || 0), 0);
        const taxTotal = newItems.reduce((sum, item) => sum + (parseFloat(item.quantity) || 0) * (parseFloat(item.price) || 0) * (parseFloat(item.taxPercent) / 100 || 0), 0);
        const totalAmount = subTotal + taxTotal - discountTotal + (parseFloat(prev.freightCharges) || 0);
        return {
          ...prev,
          items: newItems,
          subTotal: subTotal.toFixed(2),
          discountTotal: discountTotal.toFixed(2),
          taxTotal: taxTotal.toFixed(2),
          totalAmount: totalAmount.toFixed(2),
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.vendor || !formData.warehouse || formData.warehouse === 'Select Warehouse' || !formData.category || formData.category === 'Select Category') {
      setError('Please fill all required fields');
      return;
    }
    const orders = JSON.parse(localStorage.getItem('purchaseOrders') || '[]');
    const updatedOrders = id
      ? orders.map(o => (o.id === id ? { ...formData, amendmentHistory: [...formData.amendmentHistory, { date: new Date().toISOString().split('T')[0], description: 'Order updated', user: 'System' }] } : o))
      : [
          ...orders,
          {
            ...formData,
            amendmentHistory: [{ date: new Date().toISOString().split('T')[0], description: 'Order created', user: 'System' }],
            items: formData.items.map(item => ({
              ...item,
              product: item.items,
              description: item.items,
            })),
          },
        ];
    localStorage.setItem('purchaseOrders', JSON.stringify(updatedOrders));
    alert(id ? 'Purchase order updated successfully!' : 'Purchase order created successfully!');
    navigate('/purchase-orders');
  };

  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate('/purchase-orders')} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{id ? 'Edit Purchase Order' : 'Create Purchase Order'}</h1>
                  <p className="text-gray-500">Dashboard → Purchase → {id ? 'Edit' : 'Create'}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Purchase Number</p>
              <p className="text-lg font-semibold text-indigo-600">{formData.purchaseOrderNumber}</p>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

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
                  name="purchaseNumber"
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
                onClick={() => navigate('/purchase-orders')}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 font-medium shadow-lg"
              >
                {id ? 'Update Purchase Order' : 'Create Purchase Order'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePurchaseForm;