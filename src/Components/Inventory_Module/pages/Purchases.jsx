import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  X,
  Check,
  ShoppingCart,
  Package,
  Calendar,
  Hash,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const Purchases = () => {
  const [purchases, setPurchases] = useState([
    {
      id: 1,
      product: "Smartphone Pro",
      supplier: "Tech Solutions Ltd",
      quantity: 25,
      unitPrice: 999,
      totalAmount: 24975,
      date: "2025-07-25",
      status: "Completed",
    },
    {
      id: 2,
      product: "Cotton T-Shirt",
      supplier: "Global Parts Inc",
      quantity: 50,
      unitPrice: 29,
      totalAmount: 1450,
      date: "2025-07-24",
      status: "Pending",
    },
    {
      id: 3,
      product: "Office Chair",
      supplier: "Office Supplies Pro",
      quantity: 10,
      unitPrice: 150,
      totalAmount: 1500,
      date: "2025-07-23",
      status: "Completed",
    },
    {
      id: 4,
      product: "Laptop Battery",
      supplier: "Tech Solutions Ltd",
      quantity: 15,
      unitPrice: 85,
      totalAmount: 1275,
      date: "2025-07-22",
      status: "In Transit",
    },
  ]);

  const [formData, setFormData] = useState({
    product: "",
    supplier: "",
    quantity: "",
    unitPrice: "",
    date: "",
    status: "Pending",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const suppliers = [
    "Tech Solutions Ltd",
    "Global Parts Inc",
    "Office Supplies Pro",
    "Green Energy Solutions",
    "Manufacturing Corp",
    "Digital Systems",
  ];

  const statuses = ["Pending", "In Transit", "Completed", "Cancelled"];

  const filteredPurchases = purchases.filter(
    (purchase) =>
      purchase.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (
      !formData.product.trim() ||
      !formData.supplier.trim() ||
      !formData.quantity ||
      !formData.unitPrice ||
      !formData.date
    )
      return;

    const purchaseData = {
      ...formData,
      quantity: parseInt(formData.quantity),
      unitPrice: parseFloat(formData.unitPrice),
      totalAmount: parseInt(formData.quantity) * parseFloat(formData.unitPrice),
    };

    if (isEditing) {
      setPurchases(
        purchases.map((p) =>
          p.id === currentId ? { ...p, ...purchaseData } : p
        )
      );
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setPurchases([...purchases, { id: Date.now(), ...purchaseData }]);
    }
    setFormData({
      product: "",
      supplier: "",
      quantity: "",
      unitPrice: "",
      date: "",
      status: "Pending",
    });
    setShowForm(false);
  };

  const handleEdit = (purchase) => {
    setFormData({
      product: purchase.product,
      supplier: purchase.supplier,
      quantity: purchase.quantity.toString(),
      unitPrice: purchase.unitPrice.toString(),
      date: purchase.date,
      status: purchase.status,
    });
    setIsEditing(true);
    setCurrentId(purchase.id);
    setShowForm(true);
  };

  const handleDelete = (purchase) => {
    if (
      window.confirm(
        `Are you sure you want to delete purchase of "${purchase.product}"?`
      )
    ) {
      setPurchases(purchases.filter((p) => p.id !== purchase.id));
    }
  };

  const handleCancel = () => {
    setFormData({
      product: "",
      supplier: "",
      quantity: "",
      unitPrice: "",
      date: "",
      status: "Pending",
    });
    setIsEditing(false);
    setCurrentId(null);
    setShowForm(false);
  };

  const handleAddNew = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({
      product: "",
      supplier: "",
      quantity: "",
      unitPrice: "",
      date: "",
      status: "Pending",
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      Pending: "bg-yellow-100 text-yellow-800",
      "In Transit": "bg-blue-100 text-blue-800",
      Completed: "bg-green-100 text-green-800",
      Cancelled: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getTotalPurchaseValue = () => {
    return filteredPurchases.reduce(
      (total, purchase) => total + purchase.totalAmount,
      0
    );
  };

  const getCompletedPurchases = () => {
    return filteredPurchases.filter((p) => p.status === "Completed").length;
  };

  return (
    <div className="w-auto min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-100">
      <div className="w-full max-w-none px-2 sm:px-4 lg:px-6 py-4">
        {/* Header */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Purchase Management System
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Track and manage your purchase orders and inventory
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 sm:p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-600 font-medium">
                      Total Purchases
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-blue-800">
                      {filteredPurchases.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 sm:p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-green-600 font-medium">
                      Completed
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-green-800">
                      {getCompletedPurchases()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 sm:p-4 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-purple-600 font-medium">
                      Total Value
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-purple-800">
                      ${getTotalPurchaseValue().toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="relative flex-1 sm:flex-none sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search purchases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>
              <button
                onClick={handleAddNew}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Add Purchase
              </button>
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
                    {isEditing ? "Edit Purchase" : "Add New Purchase"}
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
                        Product Name *
                      </label>
                      <input
                        type="text"
                        value={formData.product}
                        onChange={(e) =>
                          setFormData({ ...formData, product: e.target.value })
                        }
                        placeholder="Enter product name..."
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Supplier *
                      </label>
                      <select
                        value={formData.supplier}
                        onChange={(e) =>
                          setFormData({ ...formData, supplier: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      >
                        <option value="">Select a supplier</option>
                        {suppliers.map((supplier) => (
                          <option key={supplier} value={supplier}>
                            {supplier}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity *
                      </label>
                      <input
                        type="number"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        placeholder="0"
                        min="1"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Unit Price ($) *
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.unitPrice}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            unitPrice: e.target.value,
                          })
                        }
                        placeholder="0.00"
                        min="0"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Amount
                      </label>
                      <input
                        type="text"
                        value={
                          formData.quantity && formData.unitPrice
                            ? `$${(
                                parseFloat(formData.quantity) *
                                parseFloat(formData.unitPrice)
                              ).toFixed(2)}`
                            : "$0.00"
                        }
                        readOnly
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 text-gray-600 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Purchase Date *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status *
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) =>
                          setFormData({ ...formData, status: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      {isEditing ? "Update" : "Add"} Purchase
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

        {/* Purchases List */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
          <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Purchase Orders ({filteredPurchases.length})
            </h2>
          </div>

          {filteredPurchases.length === 0 ? (
            <div className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="text-gray-400 mb-4">
                <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                {searchTerm ? "No purchases found" : "No purchases yet"}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {searchTerm
                  ? `No purchases match "${searchTerm}". Try a different search term.`
                  : "Get started by adding your first purchase order."}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {/* Desktop Table View */}
              <div className="hidden lg:block">
                <div className="bg-gray-50 px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 font-semibold text-gray-700">
                    <div className="col-span-2">Product</div>
                    <div className="col-span-2">Supplier</div>
                    <div className="col-span-1">Qty</div>
                    <div className="col-span-1">Unit Price</div>
                    <div className="col-span-1">Total</div>
                    <div className="col-span-2">Date</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-2 text-right">Actions</div>
                  </div>
                </div>
                {filteredPurchases.map((purchase, index) => (
                  <div
                    key={purchase.id}
                    className={`px-6 py-4 hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-25"
                    }`}
                  >
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-2">
                        <span className="text-gray-800 font-medium">
                          {purchase.product}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-600 text-sm">
                          {purchase.supplier}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span className="text-gray-800 font-medium">
                          {purchase.quantity}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span className="text-gray-800 font-medium">
                          ${purchase.unitPrice}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span className="text-gray-800 font-bold">
                          ${purchase.totalAmount.toLocaleString()}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-600 text-sm">
                          {new Date(purchase.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="col-span-1">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            purchase.status
                          )}`}
                        >
                          {purchase.status}
                        </span>
                      </div>
                      <div className="col-span-2 flex justify-end gap-2">
                        <button
                          onClick={() => handleEdit(purchase)}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Edit purchase"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(purchase)}
                          className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Delete purchase"
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
                {filteredPurchases.map((purchase) => (
                  <div
                    key={purchase.id}
                    className="p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-base sm:text-lg truncate">
                            {purchase.product}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {purchase.supplier}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                purchase.status
                              )}`}
                            >
                              {purchase.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleEdit(purchase)}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Edit purchase"
                          >
                            <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(purchase)}
                            className="bg-red-100 hover:bg-red-200 text-red-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Delete purchase"
                          >
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Hash className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">
                            {purchase.quantity} units
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">
                            ${purchase.unitPrice}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-gray-400" />
                          <span className="font-bold text-green-600">
                            ${purchase.totalAmount.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">
                            {new Date(purchase.date).toLocaleDateString()}
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

export default Purchases;
