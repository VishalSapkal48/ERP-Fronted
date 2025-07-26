import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PurchaseOrderList() {
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Mock data for demonstration (replace with API call)
    const fetchPurchaseOrders = async () => {
      try {
        // Replace with hrmApi.getPurchaseOrders()
        const mockData = [
          { id: 'PO001', supplierName: 'Supplier A', totalAmount: 583, date: '2025-07-20' },
          { id: 'PO002', supplierName: 'Supplier B', totalAmount: 1200, date: '2025-07-22' },
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
    if (filter === 'all') return true;
    if (filter === 'high') return order.totalAmount > 1000;
    return order.totalAmount <= 1000;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Purchase Order List</h2>
      <div className="mb-4">
        <label className="mr-2">Filter by Amount: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 border rounded">
          <option value="all">All</option>
          <option value="high">High ( $1000)</option>
          <option value="low">Low (≤ $1000)</option>
        </select>
      </div>
      <ul className="space-y-4">
        {filteredOrders.map(order => (
          <li key={order.id} className="p-4 border rounded shadow">
            <Link to={`/purchase-orders/details/${order.id}`} className="text-blue-500 hover:underline">
              PO #{order.id}
            </Link>
            <p><strong>Supplier:</strong> {order.supplierName}</p>
            <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
            <p><strong>Date:</strong> {order.date}</p>
          </li>
        ))}
      </ul>
      {filteredOrders.length === 0 && <p>No purchase orders found.</p>}
    </div>
  );
}

export default PurchaseOrderList;