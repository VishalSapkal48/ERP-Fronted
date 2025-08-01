import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  X,
  Check,
  Package,
  DollarSign,
  Archive,
} from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product A",
      category: "Electronics",
      price: 100,
      tax: 10,
      stock: 50,
    },
    {
      id: 2,
      name: "Product B",
      category: "Clothing",
      price: 50,
      tax: 5,
      stock: 100,
    },
    {
      id: 3,
      name: "Smartphone Pro",
      category: "Electronics",
      price: 999,
      tax: 18,
      stock: 25,
    },
    {
      id: 4,
      name: "Cotton T-Shirt",
      category: "Clothing",
      price: 29,
      tax: 12,
      stock: 200,
    },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    tax: "",
    stock: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Garden",
    "Sports",
    "Beauty",
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.category.trim() ||
      !formData.price ||
      !formData.tax ||
      !formData.stock
    )
      return;

    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      tax: parseFloat(formData.tax),
      stock: parseInt(formData.stock),
    };

    if (isEditing) {
      setProducts(
        products.map((p) => (p.id === currentId ? { ...p, ...productData } : p))
      );
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setProducts([...products, { id: Date.now(), ...productData }]);
    }
    setFormData({ name: "", category: "", price: "", tax: "", stock: "" });
    setShowForm(false);
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      tax: product.tax.toString(),
      stock: product.stock.toString(),
    });
    setIsEditing(true);
    setCurrentId(product.id);
    setShowForm(true);
  };

  const handleDelete = (product) => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      setProducts(products.filter((p) => p.id !== product.id));
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", category: "", price: "", tax: "", stock: "" });
    setIsEditing(false);
    setCurrentId(null);
    setShowForm(false);
  };

  const handleAddNew = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({ name: "", category: "", price: "", tax: "", stock: "" });
  };

  const getStockStatus = (stock) => {
    if (stock === 0)
      return { color: "text-red-600 bg-red-100", label: "Out of Stock" };
    if (stock < 20)
      return { color: "text-orange-600 bg-orange-100", label: "Low Stock" };
    return { color: "text-green-600 bg-green-100", label: "In Stock" };
  };

  return (
    <div className=" w-auto min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="w-full max-w-none px-2 sm:px-4 lg:px-6 py-4">
        {/* Header */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Products Management
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Manage your product inventory and pricing
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="relative flex-1 sm:flex-none sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>
              <button
                onClick={handleAddNew}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Add Product
              </button>
            </div>
          </div>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-200 max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
                    {isEditing ? "Edit Product" : "Add New Product"}
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
                      Product Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter product name..."
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
                        placeholder="0.00"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tax (%)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.tax}
                        onChange={(e) =>
                          setFormData({ ...formData, tax: e.target.value })
                        }
                        placeholder="0.00"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stock Quantity
                    </label>
                    <input
                      type="number"
                      value={formData.stock}
                      onChange={(e) =>
                        setFormData({ ...formData, stock: e.target.value })
                      }
                      placeholder="0"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      {isEditing ? "Update" : "Add"} Product
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

        {/* Products List */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
          <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Products ({filteredProducts.length})
            </h2>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Package className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                {searchTerm ? "No products found" : "No products yet"}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {searchTerm
                  ? `No products match "${searchTerm}". Try a different search term.`
                  : "Get started by adding your first product."}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {/* Desktop Table View */}
              <div className="hidden lg:block">
                <div className="bg-gray-50 px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 font-semibold text-gray-700">
                    <div className="col-span-3">Product Name</div>
                    <div className="col-span-2">Category</div>
                    <div className="col-span-2">Price</div>
                    <div className="col-span-1">Tax (%)</div>
                    <div className="col-span-2">Stock</div>
                    <div className="col-span-2 text-right">Actions</div>
                  </div>
                </div>
                {filteredProducts.map((product, index) => {
                  const stockStatus = getStockStatus(product.stock);
                  return (
                    <div
                      key={product.id}
                      className={`px-6 py-4 hover:bg-gray-50 transition-colors duration-200 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-25"
                      }`}
                    >
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3">
                          <span className="text-gray-800 font-medium">
                            {product.name}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {product.category}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-800 font-medium">
                            ${product.price}
                          </span>
                        </div>
                        <div className="col-span-1">
                          <span className="text-gray-600">{product.tax}%</span>
                        </div>
                        <div className="col-span-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}
                          >
                            {product.stock} units
                          </span>
                        </div>
                        <div className="col-span-2 flex justify-end gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Edit product"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(product)}
                            className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Delete product"
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
                {filteredProducts.map((product) => {
                  const stockStatus = getStockStatus(product.stock);
                  return (
                    <div
                      key={product.id}
                      className="p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-800 text-base sm:text-lg truncate">
                              {product.name}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                {product.category}
                              </span>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}
                              >
                                {stockStatus.label}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                            <button
                              onClick={() => handleEdit(product)}
                              className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                              title="Edit product"
                            >
                              <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(product)}
                              className="bg-red-100 hover:bg-red-200 text-red-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                              title="Delete product"
                            >
                              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-gray-400" />
                            <span className="font-medium">
                              ${product.price}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-gray-500">Tax:</span>
                            <span className="font-medium">{product.tax}%</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Archive className="w-4 h-4 text-gray-400" />
                            <span className="font-medium">
                              {product.stock} units
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

export default Products;
