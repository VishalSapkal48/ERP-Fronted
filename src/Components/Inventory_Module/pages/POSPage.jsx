import { useState } from 'react';
import FormInput from '../components/FormInput';

const POSPage = () => {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({ id: '', quantity: '' });

  const handleAddToCart = (e) => {
    e.preventDefault();
    setCart([...cart, { ...product, id: cart.length + 1 }]);
    setProduct({ id: '', quantity: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">POS Invoice System</h2>
      <form onSubmit={handleAddToCart} className="mb-8 bg-gray-100 p-4 rounded">
        <FormInput label="Product ID" type="text" name="id" value={product.id} onChange={(e) => setProduct({ ...product, id: e.target.value })} required />
        <FormInput label="Quantity" type="number" name="quantity" value={product.quantity} onChange={(e) => setProduct({ ...product, quantity: e.target.value })} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
      </form>
      <div>
        <h3 className="text-xl font-bold mb-2">Cart</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-2">Product ID: {item.id}, Quantity: {item.quantity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default POSPage;