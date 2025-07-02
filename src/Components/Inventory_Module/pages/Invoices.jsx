import React from 'react';
import { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const Invoices = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, number: 'INV001', date: '2025-06-30', amount: 500 },
    { id: 2, number: 'INV002', date: '2025-06-29', amount: 300 },
  ]);
  const [formData, setFormData] = useState({ number: '', date: '', amount: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'number', label: 'Invoice Number' },
    { key: 'date', label: 'Date' },
    { key: 'amount', label: 'Amount' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setInvoices(invoices.map((i) => (i.id === currentId ? { ...i, ...formData } : i)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setInvoices([...invoices, { id: invoices.length + 1, ...formData }]);
    }
    setFormData({ number: '', date: '', amount: '' });
  };

  const handleEdit = (invoice) => {
    setFormData(invoice);
    setIsEditing(true);
    setCurrentId(invoice.id);
  };

  const handleDelete = (invoice) => {
    setInvoices(invoices.filter((i) => i.id !== invoice.id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Invoice System</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Invoice Number" type="text" name="number" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} required />
        <FormInput label="Date" type="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
        <FormInput label="Amount" type="number" name="amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Invoice</button>
      </form>
      <DataTable columns={columns} data={invoices} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Invoices;