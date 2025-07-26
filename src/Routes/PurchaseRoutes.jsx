import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SupplierList from '../Components/Purchase_Module/Suppliers/SupplierList';
import SupplierForm from '../Components/Purchase_Module/Suppliers/SupplierForm';

import PurchaseOrderList from '../Components/Purchase_Module/PurchaseOrders/PurchaseOrderList';
import PurchaseOrderForm from '../Components/Purchase_Module/PurchaseOrders/PurchaseOrderForm';

import QuotationList from '../Components/Purchase_Module/Quotations/QuotationList';
import QuotationForm from '../Components/Purchase_Module/Quotations/QuotationForm';

import InvoiceList from '../Components/Purchase_Module/Invoices/InvoiceList';
import InvoiceForm from '../Components/Purchase_Module/Invoices/InvoiceForm';

import QuotationManager from '../Components/Purchase_Module/features/QuotationManagement/QuotationManager';
import MultiCurrencyPOGenerator from '../Components/Purchase_Module/features/MultiCurrencyPO/MultiCurrencyPOGenerator';
import AmendmentHistory from '../Components/Purchase_Module/features/POAmendmentHistory/AmendmentHistory';

function PurchaseRoutes() {
  return (
    <Routes>
      <Route path="/suppliers" element={<SupplierList />} />
      <Route path="/supplier-form" element={<SupplierForm />} />
    



      <Route path="/purchase-orders" element={<PurchaseOrderList />} />
      <Route path="/purchase-order-form" element={<PurchaseOrderForm />} />
    


      
      <Route path="/quotations" element={<QuotationList />} />
      <Route path="/quotation-form" element={<QuotationForm />} />
   

      <Route path="/invoices" element={<InvoiceList />} />
      <Route path="/invoice-form" element={<InvoiceForm />} />
   
   
      <Route path="/quotation-manager" element={<QuotationManager />} />
      <Route path="/multi-currency-po" element={<MultiCurrencyPOGenerator />} />
      <Route path="/amendment-history" element={<AmendmentHistory />} />
    </Routes>
  );
}

export default PurchaseRoutes;