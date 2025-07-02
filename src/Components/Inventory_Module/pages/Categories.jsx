import { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
  ]);
  const [formData, setFormData] = useState({ name: '', price: '', tax: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'name', label: 'Category Name' },
    { key: 'price', label: 'Price' },
    { key: 'tax', label: 'Tax (%)' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setCategories(categories.map((c) => (c.id === currentId ? { ...c, ...formData } : c)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setCategories([...categories, { id: categories.length + 1, ...formData }]);
    }
    setFormData({ name: '', price: '', tax: '' });
  };

  const handleEdit = (category) => {
    setFormData(category);
    setIsEditing(true);
    setCurrentId(category.id);
  };

  const handleDelete = (category) => {
    setCategories(categories.filter((c) => c.id !== category.id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Category Management</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Category Name" type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <FormInput label="Price" type="number" name="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
        <FormInput label="Tax (%)" type="number" name="tax" value={formData.tax} onChange={(e) => setFormData({ ...formData, tax: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Category</button>
      </form>
      <DataTable columns={columns} data={categories} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Categories;