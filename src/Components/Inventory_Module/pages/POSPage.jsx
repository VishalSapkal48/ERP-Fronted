import React, { useState } from "react";
import {
  Plus,
  Minus,
  ShoppingCart,
  Trash2,
  Receipt,
  Search,
  X,
  Calculator,
  DollarSign,
  Package,
  User,
  Calendar,
  Eye,
  Download,
} from "lucide-react";

const POSPage = () => {
  // Sample products database
  const [products] = useState([
    {
      id: "P001",
      name: "Laptop Dell XPS",
      price: 1200,
      stock: 15,
      category: "Electronics",
    },
    {
      id: "P002",
      name: "Wireless Mouse",
      price: 25,
      stock: 50,
      category: "Electronics",
    },
    { id: "P003", name: "Coffee Mug", price: 8, stock: 30, category: "Home" },
    {
      id: "P004",
      name: "Office Chair",
      price: 150,
      stock: 10,
      category: "Furniture",
    },
    {
      id: "P005",
      name: "Smartphone",
      price: 800,
      stock: 20,
      category: "Electronics",
    },
    { id: "P006", name: "Desk Lamp", price: 35, stock: 25, category: "Home" },
  ]);

  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + change;
            if (newQuantity <= 0) {
              return null;
            }
            if (newQuantity > item.stock) {
              return item;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTax = () => {
    return getCartTotal() * 0.08; // 8% tax
  };

  const getFinalTotal = () => {
    return getCartTotal() + getTax();
  };

  const generateInvoice = () => {
    if (cart.length === 0) return;

    const invoice = {
      id: `INV-${Date.now()}`,
      number: `INV${String(invoices.length + 1).padStart(3, "0")}`,
      date: new Date().toISOString().split("T")[0],
      customer: customer.name || "Walk-in Customer",
      customerEmail: customer.email,
      customerPhone: customer.phone,
      items: [...cart],
      subtotal: getCartTotal(),
      tax: getTax(),
      total: getFinalTotal(),
      status: "paid",
    };

    setInvoices([...invoices, invoice]);
    setCurrentInvoice(invoice);
    setShowInvoiceModal(true);

    // Clear cart and customer after invoice generation
    setCart([]);
    setCustomer({ name: "", email: "", phone: "" });
    setShowCustomerForm(false);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className=" w-auto min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-none px-2 sm:px-4 lg:px-6 py-4">
        {/* Header */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
          <div className="text-center sm:text-left mb-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              POS Invoice System
            </h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Point of Sale & Invoice Management
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <div className="relative flex-1 sm:flex-none sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Products Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg">
              <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                  Products ({filteredProducts.length})
                </h2>
              </div>

              <div className="p-3 sm:p-4 lg:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                            {product.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {product.id}
                          </p>
                          <p className="text-xs text-blue-600 font-medium">
                            {product.category}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">
                            ${product.price}
                          </p>
                          <p className="text-xs text-gray-500">
                            Stock: {product.stock}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        disabled={product.stock === 0}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-3 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                      >
                        <Plus className="w-4 h-4" />
                        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg sticky top-4">
              <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                    Cart ({cart.length})
                  </h2>
                  {cart.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200"
                      title="Clear cart"
                    >
                      <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-3 sm:p-4 lg:p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-500 text-sm sm:text-base">
                      Your cart is empty
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-800 text-sm truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-600">
                            ${item.price} each
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="bg-red-100 hover:bg-red-200 text-red-600 p-1 rounded-full transition-all duration-200"
                          >
                            <Minus className="w-3 h-3" />
                          </button>

                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            disabled={item.quantity >= item.stock}
                            className="bg-green-100 hover:bg-green-200 disabled:bg-gray-100 text-green-600 disabled:text-gray-400 p-1 rounded-full transition-all duration-200"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-medium text-gray-800 text-sm">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 transition-colors duration-200 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}

                    {/* Cart Summary */}
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal:</span>
                        <span>${getCartTotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax (8%):</span>
                        <span>${getTax().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total:</span>
                        <span>${getFinalTotal().toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Customer Info */}
                    <div className="border-t pt-4">
                      {!showCustomerForm ? (
                        <button
                          onClick={() => setShowCustomerForm(true)}
                          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                        >
                          <User className="w-4 h-4" />
                          Add Customer Info
                        </button>
                      ) : (
                        <div className="space-y-3">
                          <input
                            type="text"
                            placeholder="Customer Name"
                            value={customer.name}
                            onChange={(e) =>
                              setCustomer({ ...customer, name: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                          />
                          <input
                            type="email"
                            placeholder="Email (optional)"
                            value={customer.email}
                            onChange={(e) =>
                              setCustomer({
                                ...customer,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                          />
                          <input
                            type="tel"
                            placeholder="Phone (optional)"
                            value={customer.phone}
                            onChange={(e) =>
                              setCustomer({
                                ...customer,
                                phone: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                          />
                          <button
                            onClick={() => setShowCustomerForm(false)}
                            className="w-full text-gray-600 hover:text-gray-800 text-sm"
                          >
                            Skip Customer Info
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Generate Invoice Button */}
                    <button
                      onClick={generateInvoice}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Receipt className="w-5 h-5" />
                      Generate Invoice
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Invoices */}
        {invoices.length > 0 && (
          <div className="mt-6 bg-white rounded-lg sm:rounded-xl shadow-lg">
            <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Receipt className="w-5 h-5 sm:w-6 sm:h-6" />
                Recent Invoices ({invoices.length})
              </h2>
            </div>

            <div className="p-3 sm:p-4 lg:p-6">
              <div className="space-y-3">
                {invoices
                  .slice(-5)
                  .reverse()
                  .map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {invoice.number}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {invoice.customer}
                        </p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {invoice.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />$
                            {invoice.total.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setCurrentInvoice(invoice);
                            setShowInvoiceModal(true);
                          }}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition-all duration-200"
                          title="View invoice"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Invoice Modal */}
        {showInvoiceModal && currentInvoice && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-200 max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    Invoice Details
                  </h3>
                  <button
                    onClick={() => setShowInvoiceModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Invoice Header */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Invoice Number
                      </h4>
                      <p className="text-gray-600">{currentInvoice.number}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Date</h4>
                      <p className="text-gray-600">{currentInvoice.date}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Customer</h4>
                      <p className="text-gray-600">{currentInvoice.customer}</p>
                      {currentInvoice.customerEmail && (
                        <p className="text-sm text-gray-500">
                          {currentInvoice.customerEmail}
                        </p>
                      )}
                      {currentInvoice.customerPhone && (
                        <p className="text-sm text-gray-500">
                          {currentInvoice.customerPhone}
                        </p>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Status</h4>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Paid
                      </span>
                    </div>
                  </div>

                  {/* Invoice Items */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Items</h4>
                    <div className="space-y-2">
                      {currentInvoice.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 border border-gray-200 rounded-lg"
                        >
                          <div>
                            <h5 className="font-medium text-gray-800">
                              {item.name}
                            </h5>
                            <p className="text-sm text-gray-600">{item.id}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">
                              {item.quantity} × ${item.price}
                            </p>
                            <p className="text-sm text-gray-600">
                              ${(item.quantity * item.price).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Invoice Summary */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${currentInvoice.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (8%):</span>
                      <span>${currentInvoice.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Total:</span>
                      <span>${currentInvoice.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => window.print()}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Print Invoice
                    </button>
                    <button
                      onClick={() => setShowInvoiceModal(false)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default POSPage;
