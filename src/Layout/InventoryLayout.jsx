import Sidebar from '../Components/Inventory_Module/components/Sidebar';
import Navbar from '../Components/Inventory_Module/components/Navbar';
import InventoryRoutes from '../Routes/InventoryRoutes';

const InventoryLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <InventoryRoutes />
        </main>
      </div>
    </div>
  );
};

export default InventoryLayout;