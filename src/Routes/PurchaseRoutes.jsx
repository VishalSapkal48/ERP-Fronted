import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SupplierList from '../Components/Purchase_Module/Suppliers/SupplierList';
import SupplierForm from '../Components/Purchase_Module/Suppliers/SupplierForm';
import SupplierDetails from '../Components/Purchase_Module/Suppliers/SupplierDetails';
import PurchaseOrderList from '../Components/Purchase_Module/PurchaseOrders/PurchaseOrderList';
import PurchaseOrderForm from '../Components/Purchase_Module/PurchaseOrders/PurchaseOrderForm';
import PurchaseOrderDetails from '../Components/Purchase_Module/PurchaseOrders/PurchaseOrderDetails';
import QuotationList from '../Components/Purchase_Module/Quotations/QuotationList';
import QuotationForm from '../Components/Purchase_Module/Quotations/QuotationForm';
import QuotationDetails from '../Components/Purchase_Module/Quotations/QuotationDetails';
import InvoiceList from '../Components/Purchase_Module/Invoices/InvoiceList';
import InvoiceForm from '../Components/Purchase_Module/Invoices/InvoiceForm';
import InvoiceDetails from '../Components/Purchase_Module/Invoices/InvoiceDetails';
import QuotationManager from '../Components/Purchase_Module/features/QuotationManagement/QuotationManager';
import MultiCurrencyPOGenerator from '../Components/Purchase_Module/features/MultiCurrencyPO/MultiCurrencyPOGenerator';
import AmendmentHistory from '../Components/Purchase_Module/features/POAmendmentHistory/AmendmentHistory';

function PurchaseRoutes() {
  return (
    <Routes>
      <Route path="/purchase-orders/suppliers" element={<SupplierList />} />
      <Route path="/purchase-orders/SupplierForm" element={<SupplierForm />} />
      <Route path="/purchase-orders/SupplierDetails" element={<SupplierDetails />} />
      <Route path="/purchase-orders/PurchaseOrderList" element={<PurchaseOrderList />} />
      <Route path="/purchase-orders/PurchaseOrderForm" element={<PurchaseOrderForm />} />
      <Route path="/purchase-orders/PurchaseOrderDetails" element={<PurchaseOrderDetails />} />
      <Route path="/purchase-orders/QuotationList" element={<QuotationList />} />
      <Route path="/purchase-orders/QuotationForm" element={<QuotationForm />} />
      <Route path="/purchase-orders/QuotationDetails" element={<QuotationDetails />} />
      <Route path="/purchase-orders/InvoiceList" element={<InvoiceList />} />
      <Route path="/purchase-orders/InvoiceForm" element={<InvoiceForm />} />
      <Route path="/purchase-orders/InvoiceDetails" element={<InvoiceDetails />} />
      <Route path="/purchase-orders/QuotationManager" element={<QuotationManager />} />
      <Route path="/purchase-orders/MultiCurrencyPOGenerator" element={<MultiCurrencyPOGenerator />} />
      <Route path="/purchase-orders/AmendmentHistory" element={<AmendmentHistory />} />
    </Routes>
  );
}

export default PurchaseRoutes;