// import { Routes, Route } from 'react-router-dom';
// import Home from '../Components/Inventory_Module/pages/Dashbord';
// import Products from '../Components/Inventory_Module/pages/Products';
// import Categories from '../Components/Inventory_Module/pages/Categories';
// import Customers from '../Components/Inventory_Module/pages/Customers';
// import Suppliers from '../Components/Inventory_Module/pages/Suppliers';
// import Purchases from '../Components/Inventory_Module/pages/Purchases';
// import Invoices from '../Components/Inventory_Module/pages/Invoices';
// import POSPage from '../Components/Inventory_Module/pages/POSPage';
// import Accounts from '../Components/Inventory_Module/pages/Accounts';
// import Reports from '../Components/Inventory_Module/pages/Reports';
// import SettingsPage from '../Components/Inventory_Module/pages/SettingsPage';
// import Inventory from '../Components/Inventory_Module/pages/Inventory';
// import PriceTaxManagement from '../Components/Inventory_Module/pages/PriceTaxManagement';
// import StockManagement from '../Components/Inventory_Module/pages/StockManagement';

// function InventoryRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="inventory" element={<Inventory />} />
//       <Route path="stock-management" element={<StockManagement />} />
//       <Route path="price-tax" element={<PriceTaxManagement />} />
//       <Route path="products" element={<Products />} />
//       <Route path="categories" element={<Categories />} />
//       <Route path="customers" element={<Customers />} />
//       <Route path="suppliers" element={<Suppliers />} />
//       <Route path="purchases" element={<Purchases />} />
//       <Route path="invoices" element={<Invoices />} />
//       <Route path="pos" element={<POSPage />} />
//       <Route path="accounts" element={<Accounts />} />
//       <Route path="reports" element={<Reports />} />
//       <Route path="settings" element={<SettingsPage />} />
//     </Routes>
//   );
// }

// export default InventoryRoutes;



import { Routes, Route } from "react-router-dom";
import Home from "../Components/Inventory_Module/pages/Dashbord"; // Keeping original import with typo
import Products from "../Components/Inventory_Module/pages/Products";
import Categories from "../Components/Inventory_Module/pages/Categories";
import Customers from "../Components/Inventory_Module/pages/Customers";
import Suppliers from "../Components/Inventory_Module/pages/Suppliers";
import Purchases from "../Components/Inventory_Module/pages/Purchases";
import Invoices from "../Components/Inventory_Module/pages/Invoices";
import POSPage from "../Components/Inventory_Module/pages/POSPage";
import Accounts from "../Components/Inventory_Module/pages/Accounts";
import Inventory from "../Components/Inventory_Module/pages/Inventory";
import StockManagement from "../Components/Inventory_Module/pages/StockManagement";
import VendorLinkage from "../Components/Inventory_Module/pages/VendorLinkage";
const InventoryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="stock-management" element={<StockManagement />} />
      <Route path="products" element={<Products />} />
      <Route path="categories" element={<Categories />} />
      <Route path="customers" element={<Customers />} />
      <Route path="suppliers" element={<Suppliers />} />
      <Route path="purchases" element={<Purchases />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="pos" element={<POSPage />} />
      <Route path="accounts" element={<Accounts />} />
      <Route path="vendor-linkage" element={<VendorLinkage />} />
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-2xl font-semibold text-red-500 bg-white p-6 rounded-lg shadow-md">
              404 - Page Not Found
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default InventoryRoutes;