import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  Calendar,
  Home,
  Package,
  ShoppingCart,
  FileText,
  Users,
  Settings,
} from "lucide-react";

const Dashbord = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [metrics, setMetrics] = useState({
    totalStock: 0,
    lowStockItems: 0,
    totalSales: 0,
    totalPurchases: 0,
  });

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    setTimeout(() => {
      setMetrics({
        totalStock: 150,
        lowStockItems: 5,
        totalSales: 12000,
        totalPurchases: 8000,
      });
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
    
      <div className="flex">
        
        <div className="flex-1 p-4 ml-0 lg:ml-64 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Metrics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-2 border rounded">
                  <p>Total Stock: {metrics.totalStock}</p>
                </div>
                <div className="p-2 border rounded">
                  <p>Low Stock: {metrics.lowStockItems}</p>
                </div>
                <div className="p-2 border rounded">
                  <p>Total Sales: ${metrics.totalSales}</p>
                </div>
                <div className="p-2 border rounded">
                  <p>Total Purchases: ${metrics.totalPurchases}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
