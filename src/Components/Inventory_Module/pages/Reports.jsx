import React from 'react';
import { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const Reports = () => {
  const [reports, setReports] = useState([
    { id: 1, type: 'Sales', date: '2025-06-30', amount: 1000 },
    { id: 2, type: 'Inventory', date: '2025-06-29', amount: 500 },
  ]);
  const [formData, setFormData] = useState({ type: '', date: '', amount: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'type', label: 'Report Type' },
    { key: 'date', label: 'Date' },
    { key: 'amount', label: 'Amount' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setReports(reports.map((r) => (r.id === currentId ? { ...r, ...formData } : r)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setReports([...reports, { id: reports.length + 1, ...formData }]);
    }
    setFormData({ type: '', date: '', amount: '' });
  };

  const handleEdit = (report) => {
    setFormData(report);
    setIsEditing(true);
    setCurrentId(report.id);
  };

  const handleDelete = (report) => {
    setReports(reports.filter((r) => r.id !== report.id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Different Report Management System</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Report Type" type="text" name="type" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} required />
        <FormInput label="Date" type="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
        <FormInput label="Amount" type="number" name="amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Report</button>
      </form>
      <h3 className="text-xl font-bold mb-2">Report</h3>
      <DataTable columns={columns} data={reports} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Reports;