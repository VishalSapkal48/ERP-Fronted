import React, { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';

// Mock data (can be imported from a shared file if needed)
const mockProducts = [
  { id: 1, name: 'Product A', price: 500, category: 'Electronics' },
  { id: 2, name: 'Service B', price: 1700, category: 'Services' },
  { id: 3, name: 'Product C', price: 500, category: 'Hardware' }
];

const mockCustomers = [
  { id: 1, name: 'ABC Corporation', address: '123 Business St, Mumbai, MH 400001' },
  { id: 2, name: 'XYZ Enterprises', address: '789 Commerce Rd, Delhi, DL 110001' },
  { id: 3, name: 'PQR Solutions', address: '456 Tech Park, Bangalore, KA 560001' }
];

function InvoiceForm({ onSave, onCancel, initialData = null }) {
  const [formData, setFormData] = useState({
    id: initialData?.id || Date.now(),
    invoiceNumber: initialData?.invoiceNumber || `INV-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
    customerName: initialData?.customerName || '',
    customerAddress: initialData?.customerAddress || '',
    billingAddress: initialData?.billingAddress || '',
    shippingAddress: initialData?.shippingAddress || '',
    date: initialData?.date || new Date().toISOString().split('T')[0],
    dueDate: initialData?.dueDate || '',
    status: initialData?.status || 'pending',
    paymentTerms: initialData?.paymentTerms || 'Net 30',
    authorizedBy: initialData?.authorizedBy || '',
    items: initialData?.items || [{ id: Date.now(), name: '', quantity: 1, price: 0, total: 0 }],
    subtotal: initialData?.subtotal || 0,
    tax: initialData?.tax || 0,
    total: initialData?.total || 0
  });

  // Update subtotal, tax, and total when items change
  useEffect(() => {
    const subtotal = formData.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const tax = subtotal * 0.2; // Assuming 20% tax rate
    const total = subtotal + tax;
    setFormData(prev => ({ ...prev, subtotal, tax, total }));
  }, [formData.items]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    if (field === 'quantity' || field === 'price') {
      updatedItems[index].total = updatedItems[index].quantity * updatedItems[index].price;
    }
    setFormData(prev => ({ ...prev, items: updatedItems }));
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { id: Date.now(), name: '', quantity: 1, price: 0, total: 0 }]
    }));
  };

  const removeItem = (index) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{initialData ? 'Edit Invoice' : 'Create Invoice'}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Invoice Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
            <input
              type="text"
              name="invoiceNumber"
              value={formData.invoiceNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Customer</label>
            <select
              name="customerName"
              value={formData.customerName}
              onChange={(e) => {
                const selectedCustomer = mockCustomers.find(c => c.name === e.target.value);
                setFormData(prev => ({
                  ...prev,
                  customerName: e.target.value,
                  customerAddress: selectedCustomer?.address || '',
                  billingAddress: selectedCustomer?.address || '',
                  shippingAddress: selectedCustomer?.address || ''
                }));
              }}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Customer</option>
              {mockCustomers.map(customer => (
                <option key={customer.id} value={customer.name}>{customer.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Customer Address</label>
            <input
              type="text"
              name="customerAddress"
              value={formData.customerAddress}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Billing Address</label>
            <input
              type="text"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
            <input
              type="text"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Terms</label>
            <input
              type="text"
              name="paymentTerms"
              value={formData.paymentTerms}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Authorized By</label>
            <input
              type="text"
              name="authorizedBy"
              value={formData.authorizedBy}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>

        {/* Items */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900">Items</h2>
          {formData.items.map((item, index) => (
            <div key={item.id} className="flex gap-4 items-center mt-2">
              <select
                value={item.name}
                onChange={(e) => {
                  const selectedProduct = mockProducts.find(p => p.name === e.target.value);
                  handleItemChange(index, 'name', e.target.value);
                  if (selectedProduct) {
                    handleItemChange(index, 'price', selectedProduct.price);
                  }
                }}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Product</option>
                {mockProducts.map(product => (
                  <option key={product.id} value={product.name}>{product.name}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value) || 0)}
                className="border border-gray-300 rounded px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleItemChange(index, 'price', parseFloat(e.target.value) || 0)}
                className="border border-gray-300 rounded px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">₹{item.total.toLocaleString()}</span>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-red-600 hover:text-red-900"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="mt-2 text-blue-600 hover:text-blue-900 flex items-center gap-2"
          >
            <Plus size={16} />
            Add Item
          </button>
        </div>

        {/* Totals */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600">Subtotal</p>
            <p className="text-lg font-semibold">₹{formData.subtotal.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Tax (20%)</p>
            <p className="text-lg font-semibold">₹{formData.tax.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-lg font-semibold">₹{formData.total.toLocaleString()}</p>
          </div>
        </div>

        {/* Form Actions */}
        <div className="mt-6 flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            Save Invoice
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;