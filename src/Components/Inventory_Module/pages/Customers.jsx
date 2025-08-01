import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  X,
  Check,
  Users,
  Building,
  ShoppingCart,
  Tag,
} from "lucide-react";

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Customer A",
      category: "Retail",
      email: "customerA@email.com",
      phone: "+1234567890",
    },
    {
      id: 2,
      name: "Customer B",
      category: "Wholesale",
      email: "customerB@email.com",
      phone: "+1234567891",
    },
    {
      id: 3,
      name: "John Smith",
      category: "Retail",
      email: "john.smith@email.com",
      phone: "+1234567892",
    },
    {
      id: 4,
      name: "ABC Corporation",
      category: "Wholesale",
      email: "contact@abc.com",
      phone: "+1234567893",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["Retail", "Wholesale", "Corporate", "Individual"];

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || customer.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.category.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    )
      return;

    if (isEditing) {
      setCustomers(
        customers.map((c) => (c.id === currentId ? { ...c, ...formData } : c))
      );
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setCustomers([...customers, { id: Date.now(), ...formData }]);
    }
    setFormData({ name: "", category: "", email: "", phone: "" });
    setShowForm(false);
  };

  const handleEdit = (customer) => {
    setFormData({
      name: customer.name,
      category: customer.category,
      email: customer.email,
      phone: customer.phone,
    });
    setIsEditing(true);
    setCurrentId(customer.id);
    setShowForm(true);
  };

  const handleDelete = (customer) => {
    if (window.confirm(`Are you sure you want to delete "${customer.name}"?`)) {
      setCustomers(customers.filter((c) => c.id !== customer.id));
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", category: "", email: "", phone: "" });
    setIsEditing(false);
    setCurrentId(null);
    setShowForm(false);
  };

  const handleAddNew = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({ name: "", category: "", email: "", phone: "" });
  };

  const getCategoryInfo = (category) => {
    switch (category.toLowerCase()) {
      case "retail":
        return {
          color: "text-blue-600 bg-blue-100",
          icon: ShoppingCart,
          label: "Retail",
        };
      case "wholesale":
        return {
          color: "text-green-600 bg-green-100",
          icon: Building,
          label: "Wholesale",
        };
      case "corporate":
        return {
          color: "text-purple-600 bg-purple-100",
          icon: Building,
          label: "Corporate",
        };
      case "individual":
        return {
          color: "text-orange-600 bg-orange-100",
          icon: Users,
          label: "Individual",
        };
      default:
        return {
          color: "text-gray-600 bg-gray-100",
          icon: Tag,
          label: category,
        };
    }
  };

  const getCategoryStats = () => {
    const stats = customers.reduce((acc, customer) => {
      acc[customer.category] = (acc[customer.category] || 0) + 1;
      return acc;
    }, {});
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <div className="lg: w-auto min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="w-full max-w-none px-2 sm:px-4 lg:px-6 py-4">
        {/* Header */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Customer Management System
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Manage your customer relationships and categories
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="relative flex-1 sm:flex-none sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat} ({categoryStats[cat] || 0})
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddNew}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Add Customer
              </button>
            </div>
          </div>
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {Object.entries(categoryStats).map(([category, count]) => {
            const categoryInfo = getCategoryInfo(category);
            const CategoryIcon = categoryInfo.icon;
            return (
              <div
                key={category}
                className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`p-2 rounded-lg ${categoryInfo.color}`}>
                    <CategoryIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {category}
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-gray-800">
                      {count}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-200 max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
                    {isEditing ? "Edit Customer" : "Add New Customer"}
                  </h3>
                  <button
                    onClick={handleCancel}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter customer name..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="customer@email.com"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1234567890"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      {isEditing ? "Update" : "Add"} Customer
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

        {/* Customers List */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
          <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Customers ({filteredCustomers.length})
              {selectedCategory !== "All" && (
                <span className="text-sm text-gray-500 ml-2">
                  - {selectedCategory}
                </span>
              )}
            </h2>
          </div>

          {filteredCustomers.length === 0 ? (
            <div className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                {searchTerm || selectedCategory !== "All"
                  ? "No customers found"
                  : "No customers yet"}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {searchTerm || selectedCategory !== "All"
                  ? "No customers match your current filters. Try adjusting your search or category filter."
                  : "Get started by adding your first customer."}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {/* Desktop Table View */}
              <div className="hidden lg:block">
                <div className="bg-gray-50 px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 font-semibold text-gray-700">
                    <div className="col-span-3">Customer Name</div>
                    <div className="col-span-2">Category</div>
                    <div className="col-span-3">Email</div>
                    <div className="col-span-2">Phone</div>
                    <div className="col-span-2 text-right">Actions</div>
                  </div>
                </div>
                {filteredCustomers.map((customer, index) => {
                  const categoryInfo = getCategoryInfo(customer.category);
                  const CategoryIcon = categoryInfo.icon;
                  return (
                    <div
                      key={customer.id}
                      className={`px-6 py-4 hover:bg-gray-50 transition-colors duration-200 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-25"
                      }`}
                    >
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3">
                          <span className="text-gray-800 font-medium">
                            {customer.name}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${categoryInfo.color}`}
                          >
                            <CategoryIcon className="w-3 h-3" />
                            {categoryInfo.label}
                          </span>
                        </div>
                        <div className="col-span-3">
                          <span className="text-gray-600 text-sm">
                            {customer.email}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-600 text-sm">
                            {customer.phone}
                          </span>
                        </div>
                        <div className="col-span-2 flex justify-end gap-2">
                          <button
                            onClick={() => handleEdit(customer)}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Edit customer"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(customer)}
                            className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Delete customer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile/Tablet Card View */}
              <div className="lg:hidden">
                {filteredCustomers.map((customer) => {
                  const categoryInfo = getCategoryInfo(customer.category);
                  const CategoryIcon = categoryInfo.icon;
                  return (
                    <div
                      key={customer.id}
                      className="p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-800 text-base sm:text-lg truncate">
                              {customer.name}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${categoryInfo.color}`}
                              >
                                <CategoryIcon className="w-3 h-3" />
                                {categoryInfo.label}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                            <button
                              onClick={() => handleEdit(customer)}
                              className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                              title="Edit customer"
                            >
                              <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(customer)}
                              className="bg-red-100 hover:bg-red-200 text-red-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                              title="Delete customer"
                            >
                              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 min-w-[60px]">
                              Email:
                            </span>
                            <span className="font-medium text-gray-700 truncate">
                              {customer.email}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 min-w-[60px]">
                              Phone:
                            </span>
                            <span className="font-medium text-gray-700">
                              {customer.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customers;
