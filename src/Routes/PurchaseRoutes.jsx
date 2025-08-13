import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SupplierList from '../Components/Purchase_Module/Suppliers/SupplierList';


import PurchaseOrderList from '../Components/Purchase_Module/PurchaseOrders/PurchaseOrderList';


import QuotationList from '../Components/Purchase_Module/Quotations/QuotationList';


import InvoiceList from '../Components/Purchase_Module/Invoices/InvoiceList';


import QuotationManager from '../Components/Purchase_Module/features/QuotationManagement/QuotationManager';
import MultiCurrencyPOGenerator from '../Components/Purchase_Module/features/MultiCurrencyPO/MultiCurrencyPOGenerator';
import AmendmentHistory from '../Components/Purchase_Module/features/POAmendmentHistory/AmendmentHistory';
import Dashboard from '../Components/Purchase_Module/Dashboard';

function PurchaseRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/suppliers" element={<SupplierList />} />

    



      <Route path="/purchase-orders" element={<PurchaseOrderList />} />

    


      
      <Route path="/quotations" element={<QuotationList />} />
   
   

      <Route path="/invoices" element={<InvoiceList />} />
 
   
   
      <Route path="/quotation-manager" element={<QuotationManager />} />
      <Route path="/multi-currency-po" element={<MultiCurrencyPOGenerator />} />
      <Route path="/amendment-history" element={<AmendmentHistory />} />
    </Routes>
  );
}

export default PurchaseRoutes;