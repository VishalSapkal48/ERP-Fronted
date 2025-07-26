import React, { useState } from 'react';

function PurchaseOrderForm() {
  const [formData, setFormData] = useState({
    supplierName: '',
    supplierAddress: '',
    billingAddress: '',
    shippingAddress: '',
    items: [{ product: '', quantity: '', price: '', tax: '' }],
    paymentTerms: '',
    currency: 'USD',
    freightCharges: '',
    totalAmount: '',
    authorizedSignature: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...formData.items];
    newItems[index][name] = value;
    setFormData({ ...formData, items: newItems });
  };

  const addItem = () => {
    setFormData({ ...formData, items: [...formData.items, { product: '', quantity: '', price: '', tax: '' }] });
  };

  const calculateTotal = () => {
    const total = formData.items.reduce((sum, item) => {
      const itemTotal = (parseFloat(item.price) || 0) * (parseInt(item.quantity) || 0) + (parseFloat(item.tax) || 0);
      return sum + itemTotal;
    }, parseFloat(formData.freightCharges) || 0);
    setFormData({ ...formData, totalAmount: total.toFixed(2) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTotal();
    console.log('Purchase Order Submitted:', formData);
    // Add API call here (e.g., hrmApi.createPurchaseOrder(formData))
    alert('Purchase Order created successfully!');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Purchase Order Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Supplier Name</label>
          <input
            type="text"
            name="supplierName"
            value={formData.supplierName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Supplier Address</label>
          <input
            type="text"
            name="supplierAddress"
            value={formData.supplierAddress}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Billing Address</label>
          <input
            type="text"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Shipping Address</label>
          <input
            type="text"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">Items</h3>
          {formData.items.map((item, index) => (
            <div key={index} className="space-y-2 mb-4 border p-2 rounded">
              <input
                type="text"
                name="product"
                value={item.product}
                onChange={(e) => handleItemChange(index, e)}
                placeholder="Product/Service"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                placeholder="Quantity"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="price"
                value={item.price}
                onChange={(e) => handleItemChange(index, e)}
                placeholder="Price per Unit"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="tax"
                value={item.tax}
                onChange={(e) => handleItemChange(index, e)}
                placeholder="Tax Amount"
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Item
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium">Payment Terms</label>
          <input
            type="text"
            name="paymentTerms"
            value={formData.paymentTerms}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Currency</label>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Freight Charges</label>
          <input
            type="number"
            name="freightCharges"
            value={formData.freightCharges}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Total Amount</label>
          <input
            type="text"
            name="totalAmount"
            value={formData.totalAmount}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Authorized Signature</label>
          <input
            type="text"
            name="authorizedSignature"
            value={formData.authorizedSignature}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded"
        >
          Submit Purchase Order
        </button>
      </form>
    </div>
  );
}

export default PurchaseOrderForm;