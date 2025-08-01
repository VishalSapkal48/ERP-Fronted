import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  X,
  Check,
  Package,
  TrendingDown,
  AlertTriangle,
  Truck,
  Eye,
  Download,
  BarChart3,
} from "lucide-react";

const Inventory = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Premium Laptop",
      quantity: 50,
      unit: "pcs",
      supplier: "Tech Supplier A",
      category: "electronics",
      price: 899.99,
      minStock: 10,
      status: "in_stock",
      sku: "LAP001",
    },
    {
      id: 2,
      name: "Office Chair",
      quantity: 8,
      unit: "pcs",
      supplier: "Furniture Co B",
      category: "furniture",
      price: 149.99,
      minStock: 15,
      status: "low_stock",
      sku: "CHR002",
    },
    {
      id: 3,
      name: "Wireless Mouse",
      quantity: 120,
      unit: "pcs",
      supplier: "Electronics Hub",
      category: "electronics",
      price: 29.99,
      minStock: 25,
      status: "in_stock",
      sku: "MOU003",
    },
    {
      id: 4,
      name: "Coffee Beans",
      quantity: 2,
      unit: "kg",
      supplier: "Bean Roasters",
      category: "consumables",
      price: 15.99,
      minStock: 5,
      status: "out_of_stock",
      sku: "COF004",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    unit: "pcs",
    supplier: "",
    category: "electronics",
    price: "",
    minStock: "",
    status: "in_stock",
    sku: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const categories = [
    {
      value: "electronics",
      label: "Electronics",
      color: "bg-blue-100 text-blue-800",
    },
    {
      value: "furniture",
      label: "Furniture",
      color: "bg-green-100 text-green-800",
    },
    {
      value: "consumables",
      label: "Consumables",
      color: "bg-orange-100 text-orange-800",
    },
    {
      value: "clothing",
      label: "Clothing",
      color: "bg-purple-100 text-purple-800",
    },
    { value: "tools", label: "Tools", color: "bg-gray-100 text-gray-800" },
  ];

  const statuses = [
    {
      value: "in_stock",
      label: "In Stock",
      color: "bg-green-100 text-green-800",
    },
    {
      value: "low_stock",
      label: "Low Stock",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      value: "out_of_stock",
      label: "Out of Stock",
      color: "bg-red-100 text-red-800",
    },
  ];

  const units = [
    { value: "pcs", label: "Pieces" },
    { value: "kg", label: "Kilograms" },
    { value: "ltr", label: "Liters" },
    { value: "box", label: "Boxes" },
    { value: "pack", label: "Packs" },
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.quantity ||
      !formData.supplier.trim() ||
      !formData.price ||
      !formData.sku.trim()
    )
      return;

    const itemData = {
      ...formData,
      quantity: parseInt(formData.quantity),
      price: parseFloat(formData.price),
      minStock: parseInt(formData.minStock) || 0,
    };

    if (isEditing) {
      setItems(
        items.map((i) => (i.id === currentId ? { ...i, ...itemData } : i))
      );
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setItems([...items, { id: Date.now(), ...itemData }]);
    }
    setFormData({
      name: "",
      quantity: "",
      unit: "pcs",
      supplier: "",
      category: "electronics",
      price: "",
      minStock: "",
      status: "in_stock",
      sku: "",
    });
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      quantity: item.quantity.toString(),
      unit: item.unit,
      supplier: item.supplier,
      category: item.category,
      price: item.price.toString(),
      minStock: item.minStock.toString(),
      status: item.status,
      sku: item.sku,
    });
    setIsEditing(true);
    setCurrentId(item.id);
    setShowForm(true);
  };

  const handleDelete = (item) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${item.name}" from inventory?`
      )
    ) {
      setItems(items.filter((i) => i.id !== item.id));
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      quantity: "",
      unit: "pcs",
      supplier: "",
      category: "electronics",
      price: "",
      minStock: "",
      status: "in_stock",
      sku: "",
    });
    setIsEditing(false);
    setCurrentId(null);
    setShowForm(false);
  };

  const handleAddNew = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({
      name: "",
      quantity: "",
      unit: "pcs",
      supplier: "",
      category: "electronics",
      price: "",
      minStock: "",
      status: "in_stock",
      sku: "",
    });
  };

  const getCategoryColor = (category) => {
    const categoryObj = categories.find((c) => c.value === category);
    return categoryObj ? categoryObj.color : "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status) => {
    const statusObj = statuses.find((s) => s.value === status);
    return statusObj ? statusObj.color : "bg-gray-100 text-gray-800";
  };

  const getTotalItems = () => {
    return filteredItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalValue = () => {
    return filteredItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  };

  const getLowStockCount = () => {
    return items.filter(
      (item) => item.status === "low_stock" || item.status === "out_of_stock"
    ).length;
  };

  const getUniqueSuppliers = () => {
    return new Set(items.map((item) => item.supplier)).size;
  };

  return (
    <div className="w-auto min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="w-full max-w-none px-2 sm:px-4 lg:px-6 py-4">
        {/* Header */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Inventory Management
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Track and manage your stock items and inventory
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="relative flex-1 sm:flex-none sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search inventory..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              >
                <option value="all">All Status</option>
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>

              <button
                onClick={handleAddNew}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Add Item
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Total Items</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  {getTotalItems()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 sm:p-3 rounded-lg">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Total Value</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  ${getTotalValue().toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 sm:p-3 rounded-lg">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Low Stock</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  {getLowStockCount()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 sm:p-3 rounded-lg">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Suppliers</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  {getUniqueSuppliers()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-200 max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
                    {isEditing ? "Edit Item" : "Add New Item"}
                  </h3>
                  <button
                    onClick={handleCancel}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Premium Laptop"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        SKU
                      </label>
                      <input
                        type="text"
                        value={formData.sku}
                        onChange={(e) =>
                          setFormData({ ...formData, sku: e.target.value })
                        }
                        placeholder="LAP001"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity
                      </label>
                      <input
                        type="number"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        placeholder="50"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Unit
                      </label>
                      <select
                        value={formData.unit}
                        onChange={(e) =>
                          setFormData({ ...formData, unit: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        {units.map((unit) => (
                          <option key={unit.value} value={unit.value}>
                            {unit.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Min Stock
                      </label>
                      <input
                        type="number"
                        value={formData.minStock}
                        onChange={(e) =>
                          setFormData({ ...formData, minStock: e.target.value })
                        }
                        placeholder="10"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) =>
                          setFormData({ ...formData, price: e.target.value })
                        }
                        placeholder="899.99"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Supplier
                      </label>
                      <input
                        type="text"
                        value={formData.supplier}
                        onChange={(e) =>
                          setFormData({ ...formData, supplier: e.target.value })
                        }
                        placeholder="Tech Supplier A"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) =>
                          setFormData({ ...formData, status: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        {statuses.map((status) => (
                          <option key={status.value} value={status.value}>
                            {status.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      {isEditing ? "Update" : "Add"} Item
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Items List */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
          <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Inventory Items ({filteredItems.length})
            </h2>
          </div>

          {filteredItems.length === 0 ? (
            <div className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Package className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                {searchTerm ? "No items found" : "No items in inventory"}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {searchTerm
                  ? `No items match "${searchTerm}". Try a different search term.`
                  : "Get started by adding your first inventory item."}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {/* Desktop Table View */}
              <div className="hidden lg:block">
                <div className="bg-gray-50 px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 font-semibold text-gray-700">
                    <div className="col-span-2">Product</div>
                    <div className="col-span-1">Category</div>
                    <div className="col-span-2">Supplier</div>
                    <div className="col-span-1">Qty</div>
                    <div className="col-span-1">Price</div>
                    <div className="col-span-1">Value</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2 text-right">Actions</div>
                  </div>
                </div>
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`px-6 py-4 hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-25"
                    }`}
                  >
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-2">
                        <div>
                          <span className="text-gray-800 font-medium">
                            {item.name}
                          </span>
                          <p className="text-xs text-gray-500">
                            SKU: {item.sku}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            item.category
                          )}`}
                        >
                          {
                            categories.find((c) => c.value === item.category)
                              ?.label
                          }
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-700">{item.supplier}</span>
                      </div>
                      <div className="col-span-1">
                        <span className="text-gray-800 font-medium">
                          {item.quantity} {item.unit}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span className="text-gray-800 font-medium">
                          ${item.price}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span className="text-gray-800 font-medium">
                          ${(item.quantity * item.price).toLocaleString()}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {statuses.find((s) => s.value === item.status)?.label}
                        </span>
                      </div>
                      <div className="col-span-2 flex justify-end gap-2">
                        <button
                          className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="View item"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Download report"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(item)}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Edit item"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item)}
                          className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Delete item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile/Tablet Card View */}
              <div className="lg:hidden">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            SKU: {item.sku} • {item.supplier}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                                item.category
                              )}`}
                            >
                              {
                                categories.find(
                                  (c) => c.value === item.category
                                )?.label
                              }
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                item.status
                              )}`}
                            >
                              {
                                statuses.find((s) => s.value === item.status)
                                  ?.label
                              }
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                          <button
                            className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="View item"
                          >
                            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(item)}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Edit item"
                          >
                            <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(item)}
                            className="bg-red-100 hover:bg-red-200 text-red-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Delete item"
                          >
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Package className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">
                            {item.quantity} {item.unit}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500">$</span>
                          <span className="font-medium">{item.price}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BarChart3 className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">
                            ${(item.quantity * item.price).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
