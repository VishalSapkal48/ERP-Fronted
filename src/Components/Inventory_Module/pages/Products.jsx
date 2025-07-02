import { useState } from 'react';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', category: 'Electronics', price: 100, tax: 10, stock: 50 },
    { id: 2, name: 'Product B', category: 'Clothing', price: 50, tax: 5, stock: 100 },
  ]);
  const [formData, setFormData] = useState({ name: '', category: '', price: '', tax: '', stock: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const columns = [
    { key: 'name', label: 'Product Name' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price' },
    { key: 'tax', label: 'Tax (%)' },
    { key: 'stock', label: 'Stock' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setProducts(products.map((p) => (p.id === currentId ? { ...p, ...formData } : p)));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setProducts([...products, { id: products.length + 1, ...formData }]);
    }
    setFormData({ name: '', category: '', price: '', tax: '', stock: '' });
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
    setCurrentId(product.id);
  };

  const handleDelete = (product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Management System</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Product Name" type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <FormInput label="Category" type="text" name="category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} required />
        <FormInput label="Price" type="number" name="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
        <FormInput label="Tax (%)" type="number" name="tax" value={formData.tax} onChange={(e) => setFormData({ ...formData, tax: e.target.value })} required />
        <FormInput label="Stock" type="number" name="stock" value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{isEditing ? 'Update' : 'Add'} Product</button>
      </form>
      <DataTable columns={columns} data={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Products;