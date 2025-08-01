import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  X,
  Check,
  FileText,
  DollarSign,
  Calendar,
  Eye,
  Download,
} from "lucide-react";

const Invoices = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      number: "INV001",
      date: "2025-06-30",
      amount: 500,
      status: "paid",
      customer: "John Doe",
    },
    {
      id: 2,
      number: "INV002",
      date: "2025-06-29",
      amount: 300,
      status: "pending",
      customer: "Jane Smith",
    },
    {
      id: 3,
      number: "INV003",
      date: "2025-06-28",
      amount: 750,
      status: "overdue",
      customer: "Mike Johnson",
    },
    {
      id: 4,
      number: "INV004",
      date: "2025-06-27",
      amount: 1200,
      status: "paid",
      customer: "Sarah Wilson",
    },
  ]);
  const [formData, setFormData] = useState({
    number: "",
    date: "",
    amount: "",
    status: "pending",
    customer: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");

  const statuses = [
    {
      value: "pending",
      label: "Pending",
      color: "bg-yellow-100 text-yellow-800",
    },
    { value: "paid", label: "Paid", color: "bg-green-100 text-green-800" },
    { value: "overdue", label: "Overdue", color: "bg-red-100 text-red-800" },
    {
      value: "cancelled",
      label: "Cancelled",
      color: "bg-gray-100 text-gray-800",
    },
  ];

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (
      !formData.number.trim() ||
      !formData.date ||
      !formData.amount ||
      !formData.customer.trim()
    )
      return;

    const invoiceData = {
      ...formData,
      amount: parseFloat(formData.amount),
    };

    if (isEditing) {
      setInvoices(
        invoices.map((i) => (i.id === currentId ? { ...i, ...invoiceData } : i))
      );
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setInvoices([...invoices, { id: Date.now(), ...invoiceData }]);
    }
    setFormData({
      number: "",
      date: "",
      amount: "",
      status: "pending",
      customer: "",
    });
    setShowForm(false);
  };

  const handleEdit = (invoice) => {
    setFormData({
      number: invoice.number,
      date: invoice.date,
      amount: invoice.amount.toString(),
      status: invoice.status,
      customer: invoice.customer,
    });
    setIsEditing(true);
    setCurrentId(invoice.id);
    setShowForm(true);
  };

  const handleDelete = (invoice) => {
    if (
      window.confirm(
        `Are you sure you want to delete invoice "${invoice.number}"?`
      )
    ) {
      setInvoices(invoices.filter((i) => i.id !== invoice.id));
    }
  };

  const handleCancel = () => {
    setFormData({
      number: "",
      date: "",
      amount: "",
      status: "pending",
      customer: "",
    });
    setIsEditing(false);
    setCurrentId(null);
    setShowForm(false);
  };

  const handleAddNew = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({
      number: "",
      date: "",
      amount: "",
      status: "pending",
      customer: "",
    });
  };

  const getStatusColor = (status) => {
    const statusObj = statuses.find((s) => s.value === status);
    return statusObj ? statusObj.color : "bg-gray-100 text-gray-800";
  };

  const getTotalAmount = () => {
    return filteredInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  };

  const getStatusCounts = () => {
    return statuses.reduce((acc, status) => {
      acc[status.value] = invoices.filter(
        (inv) => inv.status === status.value
      ).length;
      return acc;
    }, {});
  };

  const statusCounts = getStatusCounts();

  return (
    <div className=" w-auto min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="w-full max-w-none px-2 sm:px-4 lg:px-6 py-4">
        {/* Header */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Invoice Management
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Track and manage your invoices and payments
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="relative flex-1 sm:flex-none sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search invoices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              >
                <option value="all">All Status</option>
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label} ({statusCounts[status.value] || 0})
                  </option>
                ))}
              </select>

              <button
                onClick={handleAddNew}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                New Invoice
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Total Invoices
                </p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  {invoices.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 sm:p-3 rounded-lg">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Total Amount</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  ${getTotalAmount()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-2 sm:p-3 rounded-lg">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Pending</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  {statusCounts.pending || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 sm:p-3 rounded-lg">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Overdue</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  {statusCounts.overdue || 0}
                </p>
              </div>
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
                    {isEditing ? "Edit Invoice" : "Create New Invoice"}
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
                      Invoice Number
                    </label>
                    <input
                      type="text"
                      value={formData.number}
                      onChange={(e) =>
                        setFormData({ ...formData, number: e.target.value })
                      }
                      placeholder="INV001"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      value={formData.customer}
                      onChange={(e) =>
                        setFormData({ ...formData, customer: e.target.value })
                      }
                      placeholder="Enter customer name..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.amount}
                        onChange={(e) =>
                          setFormData({ ...formData, amount: e.target.value })
                        }
                        placeholder="0.00"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    >
                      {statuses.map((status) => (
                        <option key={status.value} value={status.value}>
                          {status.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      {isEditing ? "Update" : "Create"} Invoice
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

        {/* Invoices List */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
          <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Invoices ({filteredInvoices.length})
            </h2>
          </div>

          {filteredInvoices.length === 0 ? (
            <div className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="text-gray-400 mb-4">
                <FileText className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                {searchTerm ? "No invoices found" : "No invoices yet"}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {searchTerm
                  ? `No invoices match "${searchTerm}". Try a different search term.`
                  : "Get started by creating your first invoice."}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {/* Desktop Table View */}
              <div className="hidden lg:block">
                <div className="bg-gray-50 px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 font-semibold text-gray-700">
                    <div className="col-span-2">Invoice #</div>
                    <div className="col-span-2">Customer</div>
                    <div className="col-span-2">Date</div>
                    <div className="col-span-2">Amount</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2 text-right">Actions</div>
                  </div>
                </div>
                {filteredInvoices.map((invoice, index) => (
                  <div
                    key={invoice.id}
                    className={`px-6 py-4 hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-25"
                    }`}
                  >
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-2">
                        <span className="text-gray-800 font-medium">
                          {invoice.number}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-700">
                          {invoice.customer}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-600">{invoice.date}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-800 font-medium">
                          ${invoice.amount}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            invoice.status
                          )}`}
                        >
                          {
                            statuses.find((s) => s.value === invoice.status)
                              ?.label
                          }
                        </span>
                      </div>
                      <div className="col-span-2 flex justify-end gap-2">
                        <button
                          className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="View invoice"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Download invoice"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(invoice)}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Edit invoice"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(invoice)}
                          className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Delete invoice"
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
                {filteredInvoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                            {invoice.number}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {invoice.customer}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                invoice.status
                              )}`}
                            >
                              {
                                statuses.find((s) => s.value === invoice.status)
                                  ?.label
                              }
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                          <button
                            className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="View invoice"
                          >
                            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(invoice)}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Edit invoice"
                          >
                            <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(invoice)}
                            className="bg-red-100 hover:bg-red-200 text-red-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Delete invoice"
                          >
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">{invoice.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">${invoice.amount}</span>
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

export default Invoices;
