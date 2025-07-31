// src/components/MultiCurrencyPOGenerator.js
import React, { useState, useEffect } from 'react';
import {
  PlusIcon,
  TrashIcon,
  DocumentArrowDownIcon,
  PrinterIcon,
  EyeIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  CalculatorIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function MultiCurrencyPOGenerator({ amendmentHistory, setAmendmentHistory }) {
  const [poData, setPOData] = useState({
    poNumber: `PO-${Date.now().toString().slice(-6)}`,
    supplier: '',
    issueDate: new Date().toISOString().split('T')[0],
    deliveryDate: '',
    currency: 'USD',
    exchangeRate: 1,
    paymentTerms: '30',
    status: 'draft',
    notes: '',
    shippingAddress: '',
    billingAddress: '',
  });

  const [items, setItems] = useState([
    {
      id: 1,
      description: '',
      quantity: 1,
      unitPrice: 0,
      currency: 'USD',
      localPrice: 0,
      total: 0,
      taxRate: 0,
      taxAmount: 0,
    },
  ]);

  const [suppliers] = useState([
    { id: 1, name: 'Tech Solutions Inc.', country: 'USA', currency: 'USD' },
    { id: 2, name: 'Global Supply Co.', country: 'UK', currency: 'GBP' },
    { id: 3, name: 'Euro Parts Ltd.', country: 'Germany', currency: 'EUR' },
    { id: 4, name: 'Asia Manufacturing', country: 'Japan', currency: 'JPY' },
    { id: 5, name: 'Indian Suppliers', country: 'India', currency: 'INR' },
  ]);

  const [exchangeRates, setExchangeRates] = useState({
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.5,
    INR: 74.2,
    CAD: 1.25,
    AUD: 1.35,
    CHF: 0.92,
  });

  const [currencies] = useState(['USD', 'EUR', 'GBP', 'JPY', 'INR', 'CAD', 'AUD', 'CHF']);
  const [paymentTermsOptions] = useState(['15', '30', '45', '60', '90', 'Net 30', 'Net 60', 'COD']);
  const [statusOptions] = useState(['draft', 'pending', 'approved', 'sent', 'received', 'cancelled']);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Placeholder for real API call
    // Example: fetch('https://api.exchangerate-api.com/v4/latest/USD')
    // For real integration, visit https://x.ai/api
  }, []);

  const updatePOData = (field, value) => {
    if (field === 'deliveryDate' && value < poData.issueDate) {
      alert('Delivery date must be after issue date');
      return;
    }
    setPOData((prev) => {
      const oldValue = prev[field];
      if (oldValue !== value) {
        setAmendmentHistory((prevHistory) => [
          ...prevHistory,
          {
            timestamp: new Date(),
            description: `Changed ${field} from "${oldValue}" to "${value}" for PO #${prev.poNumber}`,
          },
        ]);
      }
      const newData = { ...prev, [field]: value };
      if (field === 'currency') {
        newData.exchangeRate = exchangeRates[value] || 1;
      }
      return newData;
    });
  };

  const updateItem = (index, field, value) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const oldValue = newItems[index][field];
      const newValue = field === 'quantity' ? parseInt(value) || 1 : field === 'unitPrice' || field === 'taxRate' ? parseFloat(value) || 0 : value;
      if (oldValue !== newValue) {
        setAmendmentHistory((prevHistory) => [
          ...prevHistory,
          {
            timestamp: new Date(),
            description: `Changed item ${index + 1} ${field} from "${oldValue}" to "${newValue}" for PO #${poData.poNumber}`,
          },
        ]);
      }
      newItems[index][field] = newValue;
      return newItems;
    });
  };

  const calculateTotals = () => {
    const subtotal = items.reduce((sum, item) => sum + item.total, 0);
    const totalTax = items.reduce((sum, item) => sum + item.taxAmount, 0);
    const grandTotal = subtotal + totalTax;
    return { subtotal, totalTax, grandTotal };
  };

  useEffect(() => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        const rate =
          exchangeRates[item.currency] && exchangeRates[poData.currency]
            ? exchangeRates[item.currency] / exchangeRates[poData.currency]
            : 1;
        const localPrice = item.unitPrice * rate;
        const total = item.quantity * localPrice;
        const taxAmount = (total * item.taxRate) / 100;
        return { ...item, localPrice, total, taxAmount };
      })
    );
  }, [items, poData.currency, exchangeRates]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      description: '',
      quantity: 1,
      unitPrice: 0,
      currency: poData.currency,
      localPrice: 0,
      total: 0,
      taxRate: 0,
      taxAmount: 0,
    };
    setItems([...items, newItem]);
    setAmendmentHistory((prevHistory) => [
      ...prevHistory,
      {
        timestamp: new Date(),
        description: `Added new item (ID: ${newItem.id}) for PO #${poData.poNumber}`,
      },
    ]);
  };

  const removeItem = (index) => {
    if (items.length === 1) {
      alert('At least one item is required');
      return;
    }
    setAmendmentHistory((prevHistory) => [
      ...prevHistory,
      {
        timestamp: new Date(),
        description: `Removed item ${index + 1} for PO #${poData.poNumber}`,
      },
    ]);
    setItems(items.filter((_, i) => i !== index));
  };

  const validatePO = () => {
    if (!poData.supplier) return 'Please select a supplier';
    if (!poData.deliveryDate) return 'Please set a delivery date';
    if (items.some((item) => !item.description || item.quantity <= 0 || item.unitPrice < 0)) {
      return 'All items must have a valid description, quantity, and unit price';
    }
    return null;
  };

  const generatePO = async () => {
    const error = validatePO();
    if (error) {
      alert(error);
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setAmendmentHistory((prevHistory) => [
      ...prevHistory,
      {
        timestamp: new Date(),
        description: `Generated PO #${poData.poNumber}`,
      },
    ]);
    alert('Purchase Order generated successfully!');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Purchase Order', 20, 20);
    doc.text(`PO Number: ${poData.poNumber}`, 20, 30);
    doc.autoTable({
      startY: 40,
      head: [['Description', 'Qty', 'Unit Price', 'Total']],
      body: items.map((item) => [
        item.description,
        item.quantity,
        `${item.currency} ${item.unitPrice.toFixed(2)}`,
        `${poData.currency} ${(item.total + item.taxAmount).toFixed(2)}`,
      ]),
    });
    doc.save(`PO-${poData.poNumber}.pdf`);
    setAmendmentHistory((prevHistory) => [
      ...prevHistory,
      {
        timestamp: new Date(),
        description: `Exported PO #${poData.poNumber} to PDF`,
      },
    ]);
  };

  const printPO = () => {
    window.print();
    setAmendmentHistory((prevHistory) => [
      ...prevHistory,
      {
        timestamp: new Date(),
        description: `Printed PO #${poData.poNumber}`,
      },
    ]);
  };

  const { subtotal, totalTax, grandTotal } = calculateTotals();

  return (
    <div className="min-h-screen bg-gray-50 p-6 ml-64">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Multi-Currency Purchase Order Generator
              </h1>
              <p className="text-gray-600">Create and manage purchase orders across multiple currencies</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 sm:mt-0">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label={showPreview ? 'Hide purchase order preview' : 'Show purchase order preview'}
              >
                <EyeIcon className="w-4 h-4 mr-2" />
                {showPreview ? 'Hide Preview' : 'Preview'}
              </button>
              <button
                onClick={exportToPDF}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                aria-label="Export purchase order to PDF"
              >
                <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
                Export PDF
              </button>
              <button
                onClick={printPO}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                aria-label="Print purchase order"
              >
                <PrinterIcon className="w-4 h-4 mr-2" />
                Print
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <BuildingOfficeIcon className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Purchase Order Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="poNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    PO Number
                  </label>
                  <input
                    id="poNumber"
                    type="text"
                    value={poData.poNumber}
                    onChange={(e) => updatePOData('poNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="supplier" className="block text-sm font-medium text-gray-700 mb-1">
                    Supplier
                  </label>
                  <select
                    id="supplier"
                    value={poData.supplier}
                    onChange={(e) => updatePOData('supplier', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    aria-required="true"
                  >
                    <option value="">Select Supplier</option>
                    {suppliers.map((supplier) => (
                      <option key={supplier.id} value={supplier.name}>
                        {supplier.name} ({supplier.country})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    id="status"
                    value={poData.status}
                    onChange={(e) => updatePOData('status', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Issue Date
                  </label>
                  <input
                    id="issueDate"
                    type="date"
                    value={poData.issueDate}
                    onChange={(e) => updatePOData('issueDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Date
                  </label>
                  <input
                    id="deliveryDate"
                    type="date"
                    value={poData.deliveryDate}
                    onChange={(e) => updatePOData('deliveryDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="paymentTerms" className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Terms
                  </label>
                  <select
                    id="paymentTerms"
                    value={poData.paymentTerms}
                    onChange={(e) => updatePOData('paymentTerms', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {paymentTermsOptions.map((term) => (
                      <option key={term} value={term}>
                        {term} Days
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <CurrencyDollarIcon className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Currency Settings</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                    Base Currency
                  </label>
                  <select
                    id="currency"
                    value={poData.currency}
                    onChange={(e) => updatePOData('currency', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="exchangeRate" className="block text-sm font-medium text-gray-700 mb-1">
                    Exchange Rate (to USD)
                  </label>
                  <div className="relative">
                    <input
                      id="exchangeRate"
                      type="number"
                      step="0.0001"
                      value={poData.exchangeRate}
                      onChange={(e) => updatePOData('exchangeRate', parseFloat(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      aria-describedby="exchangeRateHelp"
                    />
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label="Refresh exchange rate"
                    >
                      <ArrowPathIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <p id="exchangeRateHelp" className="text-xs text-gray-500 mt-1">
                    Contact https://x.ai/api for real-time exchange rate APIs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <CalculatorIcon className="w-5 h-5 text-purple-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Line Items</h2>
                </div>
                <button
                  onClick={addItem}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="Add new line item"
                >
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Item
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Price</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Currency</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tax %</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {items.map((item, index) => (
                      <tr key={item.id}>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => updateItem(index, 'description', e.target.value)}
                            placeholder="Item description"
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            aria-label={`Description for item ${index + 1}`}
                            aria-required="true"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            min="1"
                            aria-label={`Quantity for item ${index + 1}`}
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            step="0.01"
                            value={item.unitPrice}
                            onChange={(e) => updateItem(index, 'unitPrice', e.target.value)}
                            className="w-24 px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            min="0"
                            aria-label={`Unit price for item ${index + 1}`}
                          />
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={item.currency}
                            onChange={(e) => updateItem(index, 'currency', e.target.value)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            aria-label={`Currency for item ${index + 1}`}
                          >
                            {currencies.map((currency) => (
                              <option key={currency} value={currency}>
                                {currency}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            step="0.01"
                            value={item.taxRate}
                            onChange={(e) => updateItem(index, 'taxRate', e.target.value)}
                            className="w-16 px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            min="0"
                            aria-label={`Tax rate for item ${index + 1}`}
                          />
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {poData.currency} {(item.total + item.taxAmount).toFixed(2)}
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => removeItem(index)}
                            className="text-red-600 hover:text-red-800 transition-colors disabled:opacity-50"
                            disabled={items.length === 1}
                            aria-label={`Remove item ${index + 1}`}
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="shippingAddress" className="block text-sm font-medium text-gray-700 mb-1">
                    Shipping Address
                  </label>
                  <textarea
                    id="shippingAddress"
                    value={poData.shippingAddress}
                    onChange={(e) => updatePOData('shippingAddress', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter shipping address..."
                    aria-label="Shipping address"
                  />
                </div>
                <div>
                  <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-1">
                    Billing Address
                  </label>
                  <textarea
                    id="billingAddress"
                    value={poData.billingAddress}
                    onChange={(e) => updatePOData('billingAddress', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter billing address..."
                    aria-label="Billing address"
                  />
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    value={poData.notes}
                    onChange={(e) => updatePOData('notes', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Additional notes or terms..."
                    aria-label="Additional notes"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">{poData.currency} {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium">{poData.currency} {totalTax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-blue-600">{poData.currency} {grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Status & Actions</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${
                      poData.status === 'approved'
                        ? 'bg-green-500'
                        : poData.status === 'pending'
                        ? 'bg-yellow-500'
                        : poData.status === 'cancelled'
                        ? 'bg-red-500'
                        : 'bg-gray-500'
                    }`}
                  ></div>
                  <span className="text-sm font-medium capitalize">{poData.status}</span>
                </div>
                <button
                  onClick={generatePO}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                  aria-label="Generate purchase order"
                >
                  {isLoading ? (
                    <ArrowPathIcon className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <CheckCircleIcon className="w-4 h-4 mr-2" />
                  )}
                  {isLoading ? 'Generating...' : 'Generate PO'}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Exchange Rates</h3>
              <div className="space-y-2">
                {Object.entries(exchangeRates)
                  .slice(0, 5)
                  .map(([currency, rate]) => (
                    <div key={currency} className="flex justify-between text-sm">
                      <span className="text-gray-600">1 USD = </span>
                      <span className="font-medium">{rate} {currency}</span>
                    </div>
                  ))}
              </div>
              <div className="text-xs text-gray-500 mt-3">
                Last updated: {new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {showPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-semibold">Purchase Order Preview</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close preview"
                >
                  <XCircleIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="text-center border-b pb-6">
                  <h1 className="text-3xl font-bold text-gray-900">PURCHASE ORDER</h1>
                  <p className="text-lg text-gray-600 mt-2">#{poData.poNumber}</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Order Details</h4>
                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="text-gray-600">Issue Date:</span> {poData.issueDate}
                      </p>
                      <p>
                        <span className="text-gray-600">Delivery Date:</span> {poData.deliveryDate}
                      </p>
                      <p>
                        <span className="text-gray-600">Payment Terms:</span> {poData.paymentTerms} Days
                      </p>
                      <p>
                        <span className="text-gray-600">Currency:</span> {poData.currency}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Supplier</h4>
                    <div className="space-y-1 text-sm">
                      <p className="font-medium">{poData.supplier}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Items</h4>
                  <table className="w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">
                          Description
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Qty</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">
                          Unit Price
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2 text-sm">{item.description}</td>
                          <td className="px-4 py-2 text-sm">{item.quantity}</td>
                          <td className="px-4 py-2 text-sm">{item.currency} {item.unitPrice.toFixed(2)}</td>
                          <td className="px-4 py-2 text-sm font-medium">
                            {poData.currency} {(item.total + item.taxAmount).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end">
                  <div className="w-64 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>{poData.currency} {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax:</span>
                      <span>{poData.currency} {totalTax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-2">
                      <span>Total:</span>
                      <span>{poData.currency} {grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiCurrencyPOGenerator;