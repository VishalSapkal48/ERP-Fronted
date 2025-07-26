import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PurchaseOrderDetails() {
  const { id } = useParams();
  const [purchaseOrder, setPurchaseOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock data for demonstration (replace with API call)
    const fetchPurchaseOrder = async () => {
      try {
        // Replace with hrmApi.getPurchaseOrderById(id)
        const mockData = {
          id,
          supplierName: 'Supplier A',
          supplierAddress: '123 Supplier St',
          billingAddress: '456 Billing Ave',
          shippingAddress: '789 Shipping Rd',
          items: [
            { product: 'Item 1', quantity: 10, price: 50, tax: 5 },
            { product: 'Item 2', quantity: 5, price: 30, tax: 3 },
          ],
          paymentTerms: 'Net 30',
          currency: 'USD',
          freightCharges: 20,
          totalAmount: 583,
          authorizedSignature: 'John Doe',
          amendmentHistory: ['Initial Order', 'Increased Item 1 by 5'],
          deliverySchedules: ['2025-08-01', '2025-08-15'],
        };
        setPurchaseOrder(mockData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPurchaseOrder();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!purchaseOrder) return <div>Purchase Order not found</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Purchase Order Details - ID: {purchaseOrder.id}</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Supplier Information</h3>
          <p><strong>Name:</strong> {purchaseOrder.supplierName}</p>
          <p><strong>Address:</strong> {purchaseOrder.supplierAddress}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Addresses</h3>
          <p><strong>Billing:</strong> {purchaseOrder.billingAddress}</p>
          <p><strong>Shipping:</strong> {purchaseOrder.shippingAddress}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Items</h3>
          <ul className="list-disc pl-5">
            {purchaseOrder.items.map((item, index) => (
              <li key={index}>
                {item.product} - Qty: {item.quantity}, Price: ${item.price}, Tax: ${item.tax}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p><strong>Payment Terms:</strong> {purchaseOrder.paymentTerms}</p>
          <p><strong>Currency:</strong> {purchaseOrder.currency}</p>
          <p><strong>Freight Charges:</strong> ${purchaseOrder.freightCharges}</p>
          <p><strong>Total Amount:</strong> ${purchaseOrder.totalAmount}</p>
          <p><strong>Authorized Signature:</strong> {purchaseOrder.authorizedSignature}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Amendment History</h3>
          <ul className="list-disc pl-5">
            {purchaseOrder.amendmentHistory.map((amend, index) => (
              <li key={index}>{amend}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">Delivery Schedules</h3>
          <ul className="list-disc pl-5">
            {purchaseOrder.deliverySchedules.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PurchaseOrderDetails;